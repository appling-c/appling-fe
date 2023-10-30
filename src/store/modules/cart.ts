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
		let cartItem = inventory.findIndex(
			(item) => Number(item.productID) === Number(product.productID)
		);

		if (cartItem > -1) {
			inventory[cartItem].count = product.count;
			inventory[cartItem].price = product.price;
		}
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

		const productType = product.productType;
		let cartItem;
		if (Object.keys(inventory).length == 0) {
			inventory.push(product);
			return commit("updateProductCart", inventory);
		}
		if (productType === "NORMAL") {
			cartItem = inventory?.findIndex((item) => item?.productID === product.productID);

			if (cartItem > -1) {
				inventory[cartItem].count = inventory[cartItem].count * 1 + product.count * 1;
				inventory[cartItem].price += product.price;
			} else {
				inventory.push(product);
			}
		} else {
			cartItem = inventory?.findIndex((item) => item?.option_id === product.option_id);
			if (cartItem > -1) {
				inventory[cartItem].count = inventory[cartItem].count * 1 + product.count * 1;
				inventory[cartItem].price += product.price;
			} else {
				inventory.push(product);
			}
		}

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
		state.inventory = payload;
	},
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
