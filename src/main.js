import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";
import 'preline'

import Admin from './views/admin.vue' 
import admin_dashboard from './components/admin/contents/dashboard.vue'
import admin_product from './components/admin/contents/product.vue'
import admin_calendar from './components/admin/contents/calendar.vue'

import Commerce from './views/commerce.vue' 
import Login from './views/login.vue' 
import Signup from './views/signup.vue' 

const routes = [
    { path: '/', component: Admin }, 
    { path: '/commerce', component: Commerce },
    { path: '/login', component: Login }, 
    { path: '/signup', component: Signup }, 

    {
        path: '/admin',
        component: Admin,
        children: [
            {
                path: '',
                component: admin_dashboard,
            },
            {
                path: 'dashboard',
                component: admin_dashboard,
            },
            {
                path: 'product',
                component: admin_product,
            },
            {
                path: 'calendar',
                component: admin_calendar,
            },
        
        ],
    },
 ]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')
