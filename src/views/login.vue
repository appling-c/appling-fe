<script>
import api from '../plugins/api'
import MemberLogin from '@/types/auth'
export default {
  data() { 
    return {
      user : MemberLogin,
    }
  }, 
  methods: {
    setUser(email, password){
      this.user.email = email;
      this.user.password = password;
    },
    temp() { 
      this.email = "luna@luna.com"
      this.password = "123123";
      this.setUser(this.email, this.password);
    },
    kakaologin() {
      const returnurl = import.meta.env.DEV ?
      'http://localhost:5173' : 
      'http://3.34.1.129:5173'
       return location.href = `
        https://kauth.kakao.com/oauth/authorize?client_id=04376f3d0a7618a3622f9c541d90d272&redirect_uri=${returnurl}/oauth/kakao/login&response_type=code`
     
    },
    async submit() { 
      // 사용자 로그인 처리
      const user = this.user;
      try {
        await api.memberlogin(user).then((result) => { 
          this.$router.push(`/${result}`)
        })
      } catch (err) { 
        console.log(err)
      }
    }
  }
}

</script>
<template>
<div class="h-full">
  <div class="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
    <main class="w-full max-w-md mx-auto p-6">
      <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">로그인</h1>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              
              <a @click="temp" class="text-blue-600 decoration-2 hover:underline font-medium" >
                어둠의 경로로 로그인하기
              </a>
             
            </p>
          </div>

          <div class="mt-5">
            <!-- Form -->
            
              <div class="grid gap-y-4">
                <!-- Form Group -->
                <div>
                  <label for="email" class="block text-sm mb-2 dark:text-white">아이디</label>
                  <div class="relative">
                    <input v-model="user.email" autocomplete="off" type="email" id="email" name="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="email-error">
                    <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                </div>
                <!-- End Form Group -->

                <!-- Form Group -->
                <div>
                  <div class="flex justify-between items-center">
                    <label for="password" class="block text-sm mb-2 dark:text-white">비밀번호</label>
                  </div>
                  <div class="relative">
                    <input v-model="user.password" autocomplete="off"  type="password" id="password" name="password" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="password-error">
                    <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                </div>
                <!-- End Form Group -->

                <button @click="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">로그인</button>
                <button @click="kakaologin" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                  </svg> 카카오톡 로그인하기
                </button>

              </div>
            
            <!-- End Form -->
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
</template>

