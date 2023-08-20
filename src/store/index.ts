import { createStore } from 'vuex'
 import cart from './modules/cart'
 import auth from './modules/auth'
// import products from './modules/products'

// const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        cart,
        auth
        //products
    },
//   strict: debug,
//   plugins: debug ? [createLogger()] : []
})