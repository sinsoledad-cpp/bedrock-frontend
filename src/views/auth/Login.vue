<template>
  <div class="auth-page">
    <a-card title="登录" class="auth-card">
      <a-form layout="vertical" :model="form" @submit.prevent="onSubmit">
        <a-form-item label="邮箱">
          <a-input v-model:value="form.email" type="email" autocomplete="email" />
        </a-form-item>
        <a-form-item label="密码">
          <a-input-password v-model:value="form.password" autocomplete="current-password" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" block :loading="loading" html-type="submit">
            登录
          </a-button>
        </a-form-item>
        <a-space style="width: 100%; justify-content: space-between">
          <a-typography-link @click="goRegister">去注册</a-typography-link>
          <a-typography-link @click="goForgot">忘记密码？</a-typography-link>
        </a-space>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { login } from '@/api/modules/user'

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
})

const loading = ref(false)

const onSubmit = async () => {
  if (!form.email || !form.password) {
    message.error('请输入邮箱和密码')
    return
  }
  loading.value = true
  try {
    const res = await login({
      email: form.email,
      password: form.password,
    })
    if (!res.data || (res.data.code !== 200 && res.data.code !== 201)) {
      message.error(res.data?.msg || '登录失败')
      return
    }
    message.success('登录成功')
    router.push('/')
  } catch (e) {
    message.error('系统错误，请稍后再试')
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
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.auth-card {
  width: 360px;
}
</style>

