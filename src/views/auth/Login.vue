<template>
  <div class="selection:bg-indigo-100 selection:text-indigo-900 h-screen overflow-hidden flex bg-white font-sans">
    <!-- Left Section: Form -->
    <div class="w-full lg:w-[45%] h-full flex flex-col relative bg-white z-10 overflow-y-auto">
      <!-- Logo Header -->
      <div class="p-8 absolute top-0 left-0 w-full flex justify-between items-center z-20">
        <router-link to="/" class="flex items-center gap-2 group">
          <div class="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center transition-transform group-hover:scale-95">
            <Icon icon="solar:soundwave-square-linear" width="20" />
          </div>
          <span class="font-semibold tracking-tight text-lg text-zinc-900 group-hover:text-zinc-600 transition-colors">Resonote</span>
        </router-link>
        <a href="#" class="text-xs font-medium text-zinc-500 hover:text-zinc-900 lg:hidden">Need help?</a>
      </div>

      <!-- Main Content Centered -->
      <div class="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div class="w-full max-w-sm space-y-8 mt-12 lg:mt-0">
          
          <!-- Header -->
          <div class="text-center space-y-2">
            <h1 class="text-2xl font-semibold tracking-tight text-zinc-900">Welcome back</h1>
            <p class="text-sm text-zinc-500">Enter your details to sync your resonance.</p>
          </div>

          <!-- Custom Tabs -->
          <div class="grid grid-cols-2 p-1 bg-zinc-50 rounded-xl border border-zinc-100">
            <button class="text-sm font-medium py-2 rounded-lg bg-white text-zinc-900 shadow-sm border border-zinc-100 transition-all">Sign In</button>
            <button @click="goRegister" class="text-sm font-medium py-2 rounded-lg text-zinc-500 hover:text-zinc-700 transition-all">Create Account</button>
          </div>

          <!-- Social Login -->
          <div class="grid grid-cols-2 gap-3">
            <button class="flex items-center justify-center gap-2 h-10 px-4 rounded-lg border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 transition-all">
              <Icon icon="logos:google-icon" width="18" />
              <span class="text-sm font-medium text-zinc-700">Google</span>
            </button>
            <button class="flex items-center justify-center gap-2 h-10 px-4 rounded-lg border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 transition-all">
              <Icon icon="logos:apple" width="18" class="text-black" />
              <span class="text-sm font-medium text-zinc-700">Apple</span>
            </button>
          </div>

          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <span class="w-full border-t border-zinc-100"></span>
            </div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="bg-white px-2 text-zinc-400">Or continue with</span>
            </div>
          </div>

          <!-- Form Fields -->
          <form class="space-y-4 tab-content" @submit.prevent="onSubmit">
            <div class="space-y-1 input-group">
              <label class="text-xs font-medium text-zinc-500 ml-1 transition-colors">Email address</label>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon icon="solar:letter-linear" class="text-zinc-400 transition-colors group-focus-within:text-zinc-900" width="20" />
                </div>
                <input 
                  v-model="form.email"
                  type="email" 
                  class="block w-full pl-10 pr-3 py-2.5 border border-zinc-200 rounded-xl text-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all bg-zinc-50/30 focus:bg-white text-zinc-900" 
                  placeholder="you@example.com"
                >
              </div>
            </div>

            <div class="space-y-1 input-group">
              <div class="flex items-center justify-between ml-1">
                <label class="text-xs font-medium text-zinc-500 transition-colors">Password</label>
                <a @click.prevent="goForgot" href="#" class="text-xs font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">Forgot?</a>
              </div>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon icon="solar:lock-keyhole-linear" class="text-zinc-400 transition-colors group-focus-within:text-zinc-900" width="20" />
                </div>
                <input 
                  v-model="form.password"
                  type="password" 
                  class="block w-full pl-10 pr-3 py-2.5 border border-zinc-200 rounded-xl text-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all bg-zinc-50/30 focus:bg-white text-zinc-900" 
                  placeholder="••••••••"
                >
              </div>
            </div>

            <div class="flex items-center pt-2">
              <label class="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" class="hidden">
                <div class="relative w-4 h-4">
                  <div class="checkbox-box w-4 h-4 rounded border border-zinc-300 bg-white group-hover:border-zinc-400"></div>
                  <Icon icon="solar:check-read-linear" class="checkbox-icon absolute inset-0 text-white opacity-0 transform scale-50 transition-all duration-200" width="16" />
                </div>
                <span class="text-sm text-zinc-500 select-none group-hover:text-zinc-700">Remember me for 30 days</span>
              </label>
            </div>

            <button type="submit" :disabled="loading" class="w-full flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-2.5 rounded-xl shadow-lg shadow-zinc-200 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed">
              <span v-if="loading">Signing in...</span>
              <span v-else>Sign In</span>
              <Icon v-if="!loading" icon="solar:arrow-right-linear" />
            </button>
          </form>

          <p class="text-center text-xs text-zinc-400">
            By clicking continue, you agree to our <a href="#" class="underline hover:text-zinc-900">Terms of Service</a> and <a href="#" class="underline hover:text-zinc-900">Privacy Policy</a>.
          </p>
        </div>
      </div>
      
      <!-- Mobile Footer -->
      <div class="p-6 text-center lg:hidden">
        <span class="text-xs text-zinc-400">© 2024 Resonote Inc.</span>
      </div>
    </div>

    <!-- Right Section: Visual Experience -->
    <AuthVisual />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { login } from '@/api/modules/user'
import { Icon } from '@iconify/vue'
import AuthVisual from '@/components/auth/AuthVisual.vue'

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
})

const loading = ref(false)

const onSubmit = async () => {
  if (!form.email || !form.password) {
    message.error('Please enter email and password')
    return
  }
  loading.value = true
  try {
    const res = await login({
      email: form.email,
      password: form.password,
    })
    if (!res.data || (res.data.code !== 200 && res.data.code !== 201)) {
      message.error(res.data?.msg || 'Login failed')
      return
    }
    message.success('Login successful')
    router.push('/')
  } catch (e) {
    message.error('System error, please try again later')
  } finally {
    loading.value = false
  }
}

const goRegister = () => {
  router.push('/register')
}

const goForgot = () => {
  router.push('/forgot-password')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.font-sans {
    font-family: 'Inter', sans-serif;
}

/* Custom Checkbox Animation */
.checkbox-box {
    transition: all 0.2s ease;
}
input:checked + div .checkbox-box {
    background-color: #18181B;
    border-color: #18181B;
}
input:checked + div .checkbox-icon {
    opacity: 1;
    transform: scale(1);
}

/* Input Focus Animation */
.input-group:focus-within label {
    color: #18181B;
}

/* Tab Animation */
.tab-content {
    animation: fadeIn 0.4s ease-out forwards;
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>
