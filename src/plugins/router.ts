import Admin from "../views/admin.vue";
import admin_dashboard from "../components/admin/Dashboard.vue";

import admin_product_detail from "../components/admin/product/ProductDetail.vue";
import admin_product_list from "../components/admin/product/ProductList.vue";

import admin_waybill from "../components/admin/Waybill.vue";
import admin_brandshop_regist from "../components/admin/brandshop/BrandshopRegist.vue";
import admin_brandshop_view from "../components/admin/brandshop/BrandshopView.vue";
import admin_order_calendar from "../components/admin/order/OrderCalendar.vue";
import admin_order_history from "../components/admin/order/OrderHistory.vue";

import Commerce from "../views/commerce.vue";
import commerce_main from "../components/commerce/CommerceMain.vue";
import commerce_search from "../components/commerce/CommerceProductSearch.vue";
import commerce_detail from "../components/commerce/CommerceProductDetail.vue";
import commerce_cartlist from "../components/commerce/CommerceCartlist.vue";
import commerce_regist from "../components/commerce/CommerceSellerRequest.vue";
//import commerce_pricing from '../components/commerce/CommerceMembership.vue'
import commerce_seller_brandshop from "../components/commerce/productDetail/SellerBrandshop.vue";

import kakaoLogin from "../views/kakaoLogin.vue";
import Login from "../views/login.vue";
import Signup from "../views/signup.vue";
import myAccount from "../views/myaccount.vue";
import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

import store from "../store";

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
			{ path: "brandshop/:id", component: commerce_seller_brandshop }, // 구매자 -> 판매자 등록 페이지
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
			{ path: "brandshop", component: admin_brandshop_regist }, // 농장 소개하기
			{ path: "order/calendar", component: admin_order_calendar }, // 상품달력
			{ path: "order/history", component: admin_order_history }, // 주문내역
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
	// 유저정보
	const { userInfoInterface } = store.state?.auth;

	// 타겟 url
	const { fullPath: targetPath } = to;

	// 셀러 페이지 접근 권한 체크
	if (targetPath.indexOf("/admin/") !== -1) {
		// 로그인 X
		if (Object.keys(userInfoInterface).length == 0) {
			alert("로그인 후 이용 가능합니다.");
			return (location.href = "/login");
		}

		// 권한이 없을 경우
		const { role } = userInfoInterface;
		if (role !== "SELLER") {
			alert("접근 권한이 없습니다.");
			return (location.href = "/commerce/main");
		}
	}

	next();
});

export default router;
