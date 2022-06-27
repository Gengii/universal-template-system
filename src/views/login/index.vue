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
        <svg-icon icon-class="language" class="svg-language" />
      </div>
      <el-form-item prop="username" class="form-user">
        <el-input v-model="loginForm.username"></el-input>
        <svg-icon icon-class="user" class="svg-user" />
      </el-form-item>
      <el-form-item prop="password" class="form-password">
        <!-- <el-icon class="password-icon"><TurnOff /></el-icon> -->
        <el-input v-model="loginForm.password" :type="isPassword"></el-input>
        <svg-icon
          :icon-class="svgTypeSwtich"
          class="svg-password"
          @click="switchPassword"
        />
      </el-form-item>

      <el-button class="login-btn" type="primary" @click="handleLoginBtn"
        >确认</el-button
      >
    </el-form>
    <!-- <el-icon><Open /></el-icon> -->
  </div>
</template>
/* eslint-disable */
<script setup>
import { reactive, ref, computed } from 'vue'
import { login } from '../../api/user'
import md5 from 'md5'
// import { TurnOff } from '@element-plus/icons-vue'
//* username：用户名 password：密码
const loginForm = reactive({
  username: '',
  password: ''
})
//* input 验证
const loginRules = reactive({
  username: [
    { required: true, message: '输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: 'Length should be 3 to 20', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码有误', trigger: 'blur' },
    { min: 3, max: 6, message: 'Length should be 3 to 6', trigger: 'blur' }
  ]
})
//* 密码框状态 默认password
const isPassword = ref('password')
//* 验证 from
const loginRef = ref()

/**
 * 确认按钮事件
 */
const handleLoginBtn = async () => {
  if (!loginRef.value) return
  await loginRef.value.validate(async (val) => {
    if (val) {
      //* 密码转MD5
      loginForm.password = md5(loginForm.password)
      const userInfo = await login(loginForm)
      alert('ok')
      console.log(userInfo)
    }
  })
}
/***
 * input 的 type切换
 */
const switchPassword = () => {
  isPassword.value = isPassword.value === 'password' ? 'text' : 'password'
  console.log(111)
}
/***
 * 小图标切换
 */
const svgTypeSwtich = computed(() => {
  return isPassword.value === 'password' ? 'eye-open' : 'eye'
})
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
      position: relative;
      .svg-language {
        position: absolute;
        top: 4px;
        right: 0;
        background-color: #fff;
        font-size: 16px;
        padding: 4px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
    .form-user {
      position: relative;
      .svg-user {
        position: absolute;
        right: 15px;
        bottom: 8px;
      }
    }
    .form-password {
      position: relative;
      .svg-password {
        position: absolute;
        right: 15px;
        bottom: 8px;
      }
    }
  }
  .login-btn {
    width: 420px;
    text-align: center;
  }
}
</style>
