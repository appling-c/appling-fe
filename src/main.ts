import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'preline'
import axios from './plugins/axios'
import router from './plugins/router'

import store from './store'

const app = createApp(App)
app.use(router);
app.use(store);
app.config.globalProperties.$axios = axios;
app.mount('#app')
