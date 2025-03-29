<template>
  <div class="login-container">
    <el-card class="login-card">
      <div class="login-header">
        <h2>Welcome Back</h2>
        <p class="text-gray-500">Please sign in to continue</p>
      </div>

      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="rules"
        label-position="top"
        size="large"
      >
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="Username" :prefix-icon="User" />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="Password"
            :prefix-icon="Lock"
            show-password
          />
        </el-form-item>

        <div class="remember-forgot">
          <el-checkbox v-model="loginForm.remember">Remember me</el-checkbox>
          <el-link type="primary">Forgot Password?</el-link>
        </div>

        <el-button type="primary" class="submit-btn" :loading="loading" @click="handleSubmit">
          Sign In
        </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loginFormRef = ref()
const loading = ref(false)

const loginForm = reactive({
  username: '',
  password: '',
  remember: false,
})

const rules = {
  username: [
    { required: true, message: 'Please input username', trigger: 'blur' },
    { min: 3, message: 'Length should be at least 3 characters', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
    { min: 6, message: 'Length should be at least 6 characters', trigger: 'blur' },
  ],
}

const handleSubmit = async () => {
  if (!loginFormRef.value) return

  try {
    loading.value = true
    await loginFormRef.value.validate()
    localStorage.setItem('token', '1234567890')
    router.push({ name: 'admin-login' })
  } catch (error) {
    console.error('Validation failed:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  padding: 1rem;
}

.login-card {
  width: 100%;
  max-width: 400px;
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-header h2 {
  font-size: 0.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.remember-forgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.submit-btn {
  width: 100%;
}
</style>
