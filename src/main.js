import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'preline'

import * as VueRouter from 'vue-router'

import Admin from './views/admin.vue' 
import Commerce from './views/commerce.vue' 

const routes = [
    { path: '/', component: Admin }, 
    { path: '/admin', component: Admin }, 
    { path: '/commerce', component: Commerce },
 ]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')
