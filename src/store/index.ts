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
		createPersistedState(),
		// createPersistedState({
		// 	//storage: window.sessionStorage,

		// 	storage: {
		// 		getItem: (key) => Cookies.get(key),
		// 		setItem: (key, value) => Cookies.set(key, value, { expires: 7 }),
		// 		removeItem: (key) => Cookies.remove(key),
		// 	},
		// }),
	],
	//   strict: debug,
	//   plugins: debug ? [createLogger()] : []
});
