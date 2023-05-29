import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'preline'
import axios from './plugins/axios'
import router from './plugins/router'


const app = createApp(App)
app.use(router)
app.mount('#app')

app.config.globalProperties.$axios = axios;