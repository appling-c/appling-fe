import { createStore } from "vuex";
import cart from "./modules/cart";
import auth from "./modules/auth";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  modules: {
    cart,
    auth,
  },
  plugins: [createPersistedState()],
});
