import api from "@/plugins/api";
import ProductService from "../../services/ProductService";
import productSearchInterface from "../../types/auth";
import productInventory from "../../types/auth";
import { isProxy, toRaw } from "vue";

const state = () => ({
	isShowSpinner: false,
	items: [],
	checkoutStatus: null,
	productSearchItem: {} as productSearchInterface,
	inventory: [],
});

// getters
const getters = {
	productSearchItem: (state) => {
		return state.productSearchItem;
	},
	spinnerStatus: (state) => {
		return state.isShowSpinner;
	},
	inventory: (state) => {
		return state.inventory;
	},
};

// actions
const actions = {
	updateCartItem({ state, commit }, product) {
		// 주문내역 > 상품 업데이트
		let inventory = toRaw(state.inventory);
		
		// find existing product
		let cartItem = inventory.findIndex(
			(item) => Number(item.productID) === Number(product.productID)
		);
		
		// replace product info about existing product
		if (cartItem > -1) {
			inventory[cartItem].count = product.count;
			inventory[cartItem].price = product.price;
		}

		// update cart ivnentory
		commit("updateProductCart", inventory);
	},

	// clear cart list
	clearCartList({ state, commit }) {
		commit("updateProductCart", []);
	},

	deleteCartItem({ state, commit }, productIndex) {
		// 장바구니 상품 삭제
		let inventory = toRaw(state.inventory);
		inventory.splice(productIndex, 1);

		commit("updateProductCart", inventory);
	},

	addProductToCart({ state, commit }, product) {
		// 장바구니 상품 담기
		let inventory = toRaw(state.inventory);
		//inventory.push({ ...product });
		console.log(inventory.length);

		const productType = product.productType;
		let cartItem;

		// inventory is empty
		if (inventory.length == 0) {
			inventory.push({ ...product });
			return commit("updateProductCart", inventory);
		}

		// product type is normal(no option)
		if (productType === "NORMAL") {
			cartItem = inventory?.findIndex((item) => item?.productID === product.productID);
		} else {
			// product type is option
			// check correspond productID, optionID
			cartItem = inventory?.findIndex(
				(item) =>
					item?.productID === product.productID &&
					item.targetOption.option_id === product.targetOption.option_id
			);
		}

		
		if (cartItem > -1) {
			// same product, same option 
			// sampe product, with no option

			// update product count, price for optionItem
			inventory[cartItem].count = inventory[cartItem].count * 1 + product.count * 1;
			inventory[cartItem].price += product.price;
		} else {
			// if not exist (same prduct, other option)
			inventory.push({ ...product });
		}

		// update product inventory status
		commit("updateProductCart", inventory);
	},

	gotoSearchResult({ state, commit }, productSearchItem) {
		// 상품 검색 목록 저장
		commit("setProductSearchItem", productSearchItem);
	},

	updateSpinnerStatus({ state, commit }, spinnerStatus) {
		// 스피너
		commit("updateSpinnerStatus", spinnerStatus);
	},

	async getproductlist({ state }) {
		const payload = { ...state.productSearchItem };
		return await ProductService.getproductlist_product_new(payload);
	},

	async addProducetViewCount({}, payload) {
		return await ProductService.productcount(payload);
	},
};

// mutations
const mutations = {
	setProductSearchItem(state, payload) {
		state.productSearchItem = { ...payload };
	},
	updateSpinnerStatus(state, payload) {
		state.isShowSpinner = payload;
	},
	updateProductCart(state, payload) {
		state.inventory = [...payload];
	},
	// for objects
	// const addObjectProperty = (state, property) => {
	//   state.object = {...state.object, property)
	// }
	// // for arrays
	// const addArrayItem = (state, item) => {
	//   state.array = [...state.array, item]
	// }
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
	//   modules: {
	//     nested
	//   }
};
