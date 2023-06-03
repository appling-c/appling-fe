
import Admin from '../views/admin.vue' 
import admin_dashboard from '../components/admin/contents/dashboard.vue'
import admin_product from '../components/admin/contents/product.vue'
import admin_calendar from '../components/admin/contents/calendar.vue'
import admmin_product_template from '../components/admin/contents/product/template.vue'
import Commerce from '../views/commerce.vue' 
import commerce_main from '../components/commerce/main.vue'
import commerce_search from '../components/commerce/search.vue'
import commerce_detail from '../components/commerce/detail.vue'
import commerce_cartlist from '../components/commerce/cartlist.vue'
import commerce_regist from '../components/commerce/regist.vue'
import commerce_pricing from '../components/commerce/pricing.vue'
import Login from '../views/login.vue' 
import Signup from '../views/signup.vue' 
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    { path: '/', component: Admin }, 
    {
        path: '/commerce',
        component: Commerce,
        children: [
            {
                path: "",
                component: commerce_main
            }, 
            {
                path: "main",
                component: commerce_main
            }, 
            {
                path: 'search', 
                component : commerce_search
            }, 
            {
                path: 'detail', 
                component : commerce_detail
            }, 
            {
                path: 'cartlist', 
                component : commerce_cartlist
            }, 
            {
                path: 'regist', 
                component : commerce_regist
            },
            {
                path: 'pricing', 
                component : commerce_pricing
            }, 
            
        ]
    },
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
                children : [
                    {
                        path : "",
                        component : admmin_product_template
                    },
                    {
                        path : "template",
                        component : admmin_product_template
                    }
                    
                ]
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

export default router;