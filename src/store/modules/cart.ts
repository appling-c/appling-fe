// import shop from '../../api/shop'
// import nested from './nested'
import api from '@/plugins/api'
// initial state
// shape: [{ id, quantity }]
const state = () => ({
  items: [],
  checkoutStatus: null, 
  //productSearchItem : Object,
  productSearchItem : {
    category_id: "", 
    seller_id : "", 
    keyword : "",   
    page : 0, 
    size : 100, 
    search : "",    // 검색어
    status : "",    // 상품상태(노출, 미노출)
}
//   productSearchInterface : {
//     category_id: String, 
//     seller_id : String, 
//     keyword : String,   
//     page : Number, 
//     size : Number, 
//     search : String,    // 검색어
//     status : String,    // 상품상태(노출, 미노출)
// }
})

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
  productSearchItem:(state) => {
      return state.productSearchItem;
  }
}

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

//   addProductToCart ({ state, commit }, product) {
//     commit('setCheckoutStatus', null)
//     if (product.inventory > 0) {
//       const cartItem = state.items.find(item => item.id === product.id)
//       if (!cartItem) {
//         commit('pushProductToCart', { id: product.id })
//       } else {
//         commit('incrementItemQuantity', cartItem)
//       }
//       // remove 1 item from stock
//       commit('products/decrementProductInventory', { id: product.id }, { root: true })
//     }
//   },

  gotoSearchResult({state, commit}, productSearchItem){
    // 상품 검색 목록 저장
    commit('setProductSearchItem', productSearchItem);
    // 상품 검색 결과로 리다이렉팅
  }, 

  async getproductlist({state, getters}){
    const payload = {...state.productSearchItem};
    
    console.log(payload)
    await api.getproductlist_product_new(payload).then(response=> {
        console.log(response)
    })

  }
}

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
  setProductSearchItem(state, payload){
    state.productSearchItem = {...payload};
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
//   modules: {
//     nested
//   }
}