<template>
  <div class="login">
    <el-form :model="form" :rules="rules" ref="formRef" label-width="100px">
      <el-form-item label="Username" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElForm, ElFormItem, ElInput } from 'element-plus'

const form = ref({
  username: '',
  password: '',
})

const rules = ref({
  username: [{ required: true, message: 'Please input username', trigger: 'blur' }],
  password: [{ required: true, message: 'Please input password', trigger: 'blur' }],
})

const formRef = ref<InstanceType<typeof ElForm>>()
const router = useRouter()
const handleLogin = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log('submit!')
      localStorage.setItem('token', '123456')
      router.push('/admin')
    } else {
      console.log('error submit!')
    }
  })
}
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
