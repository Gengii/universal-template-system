<template>
  <div>
    <el-form :model="loginForm" >
      <el-form-item>
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const loginForm = reactive({
  username: '',
  password: ''
})
</script>

<style lang="scss" scoped></style>
