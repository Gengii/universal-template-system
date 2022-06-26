<template>
  <div class="loginBox">
    <el-form
      :model="loginForm"
      :rules="loginRules"
      ref="loginRef"
      class="login-form"
    >
      <div class="title-container">
        <h3>用户登录</h3>
      </div>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-icon class="password-icon"><TurnOff /></el-icon>
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>

      <svg-icon icon-class="password" />

      <el-button
        class="login-btn"
        type="primary"
        @click="handleLoginBtn(loginRef)"
        >确认</el-button
      >
    </el-form>
    <!-- <el-icon><Open /></el-icon> -->
  </div>
</template>
/* eslint-disable */
<script setup>
import { reactive } from 'vue'
import { TurnOff } from '@element-plus/icons-vue'
const loginForm = reactive({
  username: '',
  password: ''
})
const loginRules = reactive({
  username: [
    { required: true, message: '输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码有误', trigger: 'blur' },
    { min: 3, max: 6, message: 'Length should be 3 to 6', trigger: 'blur' }
  ]
})
// 点击确定按钮登录
const handleLoginBtn = async (ref) => {
  if (!ref) return
  await ref.validate((val) => {
    if (val) {
      alert('ok')
      console.log(111)
    }
  })
}
</script>

<style lang="scss" scoped>
.loginBox {
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
  .login-form {
    width: 420px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .title-container {
      text-align: center;
      padding-bottom: 20px;
      color: #eeeeee;
    }
  }
  .login-btn {
    width: 420px;
    text-align: center;
  }
}
</style>
