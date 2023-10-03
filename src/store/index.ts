import { createStore } from "vuex";
import cart from "./modules/cart";
import auth from "./modules/auth";
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";
// import products from './modules/products'

// const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    cart,
    auth,
    //products
  },
  plugins: [createPersistedState({})],
  //   strict: debug,
  //   plugins: debug ? [createLogger()] : []
});
