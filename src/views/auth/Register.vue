<template>
  <div class="auth-page">
    <a-card title="注册" class="auth-card">
      <a-form layout="vertical" :model="form" @submit.prevent="onSubmit">
        <a-form-item label="邮箱">
          <a-input v-model:value="form.email" type="email" autocomplete="email" />
        </a-form-item>
        <a-form-item label="密码">
          <a-input-password v-model:value="form.password" autocomplete="new-password" />
        </a-form-item>
        <a-form-item label="确认密码">
          <a-input-password v-model:value="form.confirmPassword" autocomplete="new-password" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" block :loading="loading" html-type="submit">
            注册
          </a-button>
        </a-form-item>
        <a-typography-link @click="goLogin">已有账号？去登录</a-typography-link>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { signup } from '@/api/modules/user'

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  confirmPassword: '',
})

const loading = ref(false)

const onSubmit = async () => {
  if (!form.email || !form.password || !form.confirmPassword) {
    message.error('请完整填写信息')
    return
  }
  if (form.password !== form.confirmPassword) {
    message.error('两次输入密码不一致')
    return
  }
  loading.value = true
  try {
    const res = await signup({
      email: form.email,
      password: form.password,
      confirmPassword: form.confirmPassword,
    })
    if (!res.data || (res.data.code !== 200 && res.data.code !== 201)) {
      message.error(res.data?.msg || '注册失败')
      return
    }
    message.success('注册成功，请登录')
    router.push('/login')
  } catch (e) {
    message.error('系统错误，请稍后再试')
  } finally {
    loading.value = false
  }
}

const goLogin = () => {
  router.push('/login')
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

