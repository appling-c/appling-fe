// import shop from '../../api/shop'
// import nested from './nested'
import api from "@/plugins/api";
import ProductService from "../../services/ProductService";
import productSearchInterface from "../../types/auth";
import productInventory from "../../types/auth";
// initial state
// shape: [{ id, quantity }]
const state = () => ({
  isShowSpinner: false,
  items: [],
  checkoutStatus: null,
  productSearchItem: {} as productSearchInterface,
  inventory: [],
});

// getters
const getters = {
  //   cartProducts: (state, getters, rootState) => {
  //     return state.items.map(({ id, quantity }) => {
  //       const product = rootState.products.all.find(product => product.id === id)
  //       return {
  //         id: product.id,
  //         title: product.title,
  //         price: product.price,
  //         quantity
  //       }
  //     })
  //   },

  //   cartTotalPrice: (state, getters) => {
  //     return getters.cartProducts.reduce((total, product) => {
  //       return total + product.price * product.quantity
  //     }, 0)
  //   },
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
  //   async checkout ({ commit, state }, products) {
  //     const savedCartItems = [...state.items]
  //     commit('setCheckoutStatus', null)
  //     // empty cart
  //     commit('setCartItems', { items: [] })
  //     try {
  //       await shop.buyProducts(products)
  //       commit('setCheckoutStatus', 'successful')
  //     } catch (e) {
  //       console.error(e)
  //       commit('setCheckoutStatus', 'failed')
  //       // rollback to the cart saved before sending the request
  //       commit('setCartItems', { items: savedCartItems })
  //     }
  //   },

  addProductToCart({ state, commit }, product) {
    // commit("setCheckoutStatus", null);
    console.log(product);
    let inventory = state.inventory;
    let cartItem = inventory.findIndex((item) => item.productID === product.productID);

    if (cartItem > -1) {
      //commit("pushProductToCart", product);
      inventory[cartItem].count = inventory[cartItem].count * 1 + product.count * 1;
      inventory[cartItem].price += product.price;
    } else {
      inventory.push(product);
      //commit("incrementItemQuantity", cartItem);
    }

    commit("updateProductCart", inventory);
    // remove 1 item from stock
    //commit("products/decrementProductInventory", { id: product.id }, { root: true });
  },

  gotoSearchResult({ state, commit }, productSearchItem) {
    // 상품 검색 목록 저장
    commit("setProductSearchItem", productSearchItem);
    // 상품 검색 결과로 리다이렉팅
  },

  updateSpinnerStatus({ state, commit }, spinnerStatus) {
    // 상품 검색 목록 저장
    commit("updateSpinnerStatus", spinnerStatus);
    // 상품 검색 결과로 리다이렉팅
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
  //   pushProductToCart (state, { id }) {
  //     state.items.push({
  //       id,
  //       quantity: 1
  //     })
  //   },

  //   incrementItemQuantity (state, { id }) {
  //     const cartItem = state.items.find(item => item.id === id)
  //     cartItem.quantity++
  //   },

  //   setCartItems (state, { items }) {
  //     state.items = items
  //   },

  //   setCheckoutStatus (state, status) {
  //     state.checkoutStatus = status
  //   },
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
