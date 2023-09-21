import Admin from "../views/admin.vue";
import admin_dashboard from "../components/admin/Dashboard.vue";
import admin_calendar from "../components/admin/Calendar.vue";

import admin_product_detail from "../components/admin/product/ProductDetail.vue";
import admin_product_list from "../components/admin/product/ProductList.vue";

import admin_waybill from "../components/admin/Waybill.vue";
import admin_brandshop_regist from "../components/admin/brandshop/BrandshopRegist.vue";
import admin_brandshop_view from "../components/admin/brandshop/BrandshopView.vue";

import Commerce from "../views/commerce.vue";
import commerce_main from "../components/commerce/CommerceMain.vue";
import commerce_search from "../components/commerce/CommerceProductSearch.vue";
import commerce_detail from "../components/commerce/CommerceProductDetail.vue";
import commerce_cartlist from "../components/commerce/CommerceCartlist.vue";
import commerce_regist from "../components/commerce/CommerceSellerRequest.vue";
//import commerce_pricing from '../components/commerce/CommerceMembership.vue'

import kakaoLogin from "../views/kakaoLogin.vue";
import Login from "../views/login.vue";
import Signup from "../views/signup.vue";
import myAccount from "../views/myaccount.vue";
import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/", component: Commerce },
  { path: "/account", component: myAccount },
  { path: "/oauth/kakao/login", component: kakaoLogin },

  {
    path: "/commerce", // 구매자
    component: Commerce,
    children: [
      { path: "", component: commerce_main }, // 메인
      { path: "main", component: commerce_main }, // 메인
      { path: "search", component: commerce_search }, // 상품 검색 결과
      { path: "detail/:id", component: commerce_detail }, // 상품 상세
      { path: "cartlist", component: commerce_cartlist }, // 장바구니
      { path: "regist", component: commerce_regist }, // 구매자 -> 판매자 등록 페이지
      //{ path: 'pricing', component : commerce_pricing }, // 멤버십 안내 페이지
    ],
  },

  {
    path: "/admin",
    component: Admin,
    children: [
      { path: "", component: admin_dashboard }, // 메인(대시보드)
      { path: "dashboard", component: admin_dashboard }, // 메인(대시보드)
      { path: "product/detail/:id", component: admin_product_detail }, // 상품등록/수정
      { path: "product/list", component: admin_product_list }, // 상품 관리하기
      { path: "product/waybill", component: admin_waybill }, // 운송장 등록하기
      { path: "calendar", component: admin_calendar }, // 상품달력
      { path: "brandshop", component: admin_brandshop_regist }, // 농장 소개하기
      //{ path : "brandshop/preview",component: admin_preview_brandshop }, // 농장 소개하기 view
    ],
  },
  { path: "/brandshop/preview/:id", component: admin_brandshop_view }, // 농장 소개하기 view
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // ...
  console.log(to);
  console.log(from);
  next();
});

export default router;
