import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";
import 'preline'

import * as VueRouter from 'vue-router'

import Admin from './views/admin.vue' 
import Commerce from './views/commerce.vue' 
import Login from './views/login.vue' 

const routes = [
    { path: '/', component: Admin }, 
    { path: '/admin', component: Admin }, 
    { path: '/commerce', component: Commerce },
    { path: '/login', component: Login }, 
 ]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')
