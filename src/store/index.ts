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
  plugins: [
    createPersistedState({
      // storage: {
      //   getItem(key) {
      //     if (JSON.parse(localStorage.getItem("saveLogin"))) {
      //       return localStorage.getItem(key);
      //     } else {
      //       return Cookies.get(key);
      //       // return sessionStorage.getItem(key);
      //     }
      //   },
      //   setItem(key, value) {
      //     if (JSON.parse(localStorage.getItem("saveLogin"))) {
      //       localStorage.setItem(key, value);
      //     } else {
      //       Cookies.set(key, value);
      //       // sessionStorage.setItem(key, value);
      //     }
      //   },
      //   removeItem(key) {
      //     if (JSON.parse(localStorage.getItem("saveLogin"))) {
      //       localStorage.removeItem(key);
      //     } else {
      //       Cookies.get(key);
      //       // sessionStorage.removeItem(key);
      //     }
      //   },
      // },
    }),
  ],
  //   strict: debug,
  //   plugins: debug ? [createLogger()] : []
});
