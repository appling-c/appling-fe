<template>
	<TheCommerceHeader />
	

	<div class="antialiased bg-white">
		<TheMyApplingHeader />
		<main class="p-4 pb-4 md:ml-64 h-auto pt-20">
			<header>
				<p class="mb-2 text-sm font-semibold text-blue-600">마이애플링</p>
				<h1 class="pb-4 block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
					장바구니
				</h1>
			</header>
			<div
				class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 mb-4"
			>
				<div class="py-7 mx-auto max-w-2xl">
					<router-view></router-view>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
	import TheCommerceHeader from "../components/commerce/common/TheCommerceHeader.vue";
	import TheMyApplingHeader from "../components/commerce/my/TheMyApplingHeader.vue";
</script>
