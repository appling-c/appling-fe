
<template>
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="grid md:grid-cols-2 items-center gap-12">
    <div>
      <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
        🍎 애플링 가족이 되기
      </h1>
      <p class="mt-1 md:text-lg text-gray-800 dark:text-gray-200">
        🍎 애플링 서비스 가입을 위해 정보를 입력해주세요.
      </p>

      <div class="mt-8">
        <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
          이런 서비스를 이용할 수 있어요.
        </h2>

        <ul class="mt-2 space-y-2">
          <li class="flex space-x-3">
            <svg class="flex-shrink-0 h-6 w-6 text-gray-600 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"></path>
            </svg>
            <span class="text-gray-600 dark:text-gray-400">
              처음 가입은 구매자로 가입됩니다. 
            </span>
          </li>

          <li class="flex space-x-3">
            <svg class="flex-shrink-0 h-6 w-6 text-gray-600 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"></path>
            </svg>
            <span class="text-gray-600 dark:text-gray-400">
              관리자 승인을 통해 판매자 권한을 얻어 상품을 판매할 수 있어요.
            </span>
          </li>

          <li class="flex space-x-3">
            <svg class="flex-shrink-0 h-6 w-6 text-gray-600 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"></path>
            </svg>
            <span class="text-gray-600 dark:text-gray-400">
              인증된 사용자만 판매, 구매할 수 있어요.
            </span>
          </li>
        </ul>
      </div>
    </div>
    <!-- End Col -->

    <div class="relative">
      <!-- Card -->
      <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
          간단한 정보를 입력해주세요.
        </h2>

        <p class="mt-2 text-base text-gray-600 dark:text-gray-400">
          이미 계정이 있나요?
          <router-link to="/login" class="text-blue-600 decoration-2 hover:underline font-medium" href="../examples/html/signin.html">
            여기서 로그인하기
          </router-link>
        </p>

        <form>
          <div class="mt-6 grid gap-4 lg:gap-6">
            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label for="hs-firstname-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">이름</label>
                <input v-model="name" type="text" name="hs-firstname-hire-us-1" id="hs-firstname-hire-us-1" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              </div>

              <div>
                <label for="hs-lastname-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">활동 닉네임</label>
                <input v-model="nickname" type="text" name="hs-lastname-hire-us-1" id="hs-lastname-hire-us-1" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              </div>
            </div>
            <!-- End Grid -->

            <div>
              <label for="hs-work-email-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">이메일</label>
              <input v-model="email" type="email" name="hs-work-email-hire-us-1" id="hs-work-email-hire-us-1" autocomplete="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            </div>

            <div>
              <label for="hs-work-email-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">비밀번호</label>
              <input v-model="password" type="password" name="hs-work-email-hire-us-1" id="hs-work-email-hire-us-1" autocomplete="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            </div>

            <div>
              <label for="hs-work-email-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">생년월일</label>
              <input v-model="birth" type="text" name="hs-work-email-hire-us-1" id="hs-work-email-hire-us-1" autocomplete="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            </div>
          </div>
        </form>
        <!-- End Grid -->

        <!-- Checkbox -->
        <div class="mt-3 flex">
          <div class="flex">
            <input id="remember-me" name="remember-me" type="checkbox" class="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
          </div>
          <div class="ml-3">
            <label for="remember-me" class="text-sm text-gray-600 dark:text-gray-400"><a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">약관</a>에 따라 본 서비스 이용에 동의합니다.</label>
          </div>
        </div>
        <!-- End Checkbox -->

        <div class="mt-6 grid">
          <button @click="submit" type="submit" class="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">가입하기</button>
        </div>
      </div>
      <!-- End Card -->
    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
</template>

<script>

export default {
  data(){
    return {
      name : "최고은", nickname : "김루나", email : "luna@luna.com", password : "123123", birth :"19960918"
    }
  },
  methods: {
    async submit(){
    //console.log(name, nickname, email, password, birth)
//  try {
//         const rs = await this.$axios.get('api/member');
//         console.log(rs);
//       } catch (err) {
//         console.error(err);
//       }
//   return;
    const user = 
    {
      name: this.name, 
      nickname: this.nickname, 
      email: this.email, 
      password:this.password, 
      birth:this.birth
    }

    try {
        const rs = await this.$axios.post('api/member/join', {...user});
        console.log(rs);
      } catch (err) {
        console.error(err);
      }
  

  }
  },
}

  
</script>
