<template>
  <div class="auth-page">
    <a-card title="找回密码" class="auth-card">
      <a-form layout="vertical" :model="form" @submit.prevent="onSubmit">
        <a-form-item label="Email">
          <a-input v-model:value="form.email" />
        </a-form-item>
        <a-form-item label="验证码">
          <div class="code-row">
            <a-input v-model:value="form.code" maxlength="6" />
            <a-button
              type="default"
              class="code-button"
              :loading="sending"
              :disabled="countdown > 0"
              @click="onSendCode"
            >
              <span v-if="countdown === 0">发送验证码</span>
              <span v-else>{{ countdown }} 秒后重试</span>
            </a-button>
          </div>
        </a-form-item>
        <a-form-item label="新密码">
          <a-input-password
            v-model:value="form.password"
            autocomplete="new-password"
          />
        </a-form-item>
        <a-form-item label="确认新密码">
          <a-input-password
            v-model:value="form.confirmPassword"
            autocomplete="new-password"
          />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" block :loading="loading" html-type="submit">
            重置密码
          </a-button>
        </a-form-item>
        <a-typography-link @click="goLogin">返回登录</a-typography-link>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
import { sendResetPasswordCode, resetPassword } from "@/api/modules/user";

const router = useRouter();

const form = reactive({
  email: "",
  code: "",
  password: "",
  confirmPassword: "",
});

const loading = ref(false);
const sending = ref(false);
const countdown = ref(0);
let timer = null;

const startCountdown = () => {
  countdown.value = 60;
  timer = setInterval(() => {
    if (countdown.value <= 1) {
      clearInterval(timer);
      countdown.value = 0;
      return;
    }
    countdown.value -= 1;
  }, 1000);
};

const onSendCode = async () => {
  if (!form.email) {
    message.error("请输入有效的邮箱");
    return;
  }
  sending.value = true;
  try {
    const res = await sendResetPasswordCode({
      email: form.email,
    });
    if (!res.data || res.data.code !== 200) {
      message.error(res.data?.msg || "发送失败");
      return;
    }
    message.success("验证码已发送");
    startCountdown();
  } catch (e) {
    message.error("系统错误，请稍后再试");
  } finally {
    sending.value = false;
  }
};

const onSubmit = async () => {
  if (!form.email || !form.code || !form.password || !form.confirmPassword) {
    message.error("请完整填写信息");
    return;
  }
  if (form.password !== form.confirmPassword) {
    message.error("两次输入密码不一致");
    return;
  }
  loading.value = true;
  try {
    const res = await resetPassword({
      email: form.email,
      code: form.code,
      password: form.password,
      confirmPassword: form.confirmPassword,
    });
    if (!res.data || res.data.code !== 200) {
      message.error(res.data?.msg || "重置密码失败");
      return;
    }
    message.success("重置密码成功，请重新登录");
    router.push("/login");
  } catch (e) {
    message.error("系统错误，请稍后再试");
  } finally {
    loading.value = false;
  }
};

const goLogin = () => {
  router.push("/login");
};
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
  width: 380px;
}

.code-row {
  display: flex;
  gap: 8px;
}

.code-button {
  flex-shrink: 0;
}
</style>
