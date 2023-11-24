<script>
	import { mapGetters } from "vuex";
	import { initFlowbite } from "flowbite";
	export default {
		computed: {
			...mapGetters("cart", ["spinnerStatus"]),
		},
		mounted() {
			initFlowbite();
			
		},
	};
</script>

<template>
	<div>
		<router-view />
		<template v-if="spinnerStatus">
			<div
				class="absolute top-0 left-0 w-full h-full bg-white/[.5] rounded-md dark:bg-gray-800/[.4]"
			></div>
			<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<div
					class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
					role="status"
					aria-label="loading"
				>
					<span class="sr-only">Loading...</span>
				</div>
			</div>
		</template>
		<footer class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
			<!-- Grid -->
			<div class="text-center">
				<div>
					<a
						class="flex-none text-base font-semibold text-black dark:text-white"
						aria-label="Brand"
						>🍎Appling</a
					>
				</div>
				<!-- End Col -->

				<div class="mt-3">
					<p class="text-gray-500">© Copyright 2023. Appling. All rights reserved.</p>
				</div>
			</div>
			<!-- End Grid -->
		</footer>
	</div>
</template>
