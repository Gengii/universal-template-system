<template>
  <div>
    <el-menu
      active-text-color="#fff"
      background-color="#304156"
      default-active=""
      text-color="#bfcbd9"
      unique-opened
      router
    >
      <MenuItem v-for="item in newData" :key="item" :menuList="item"></MenuItem>
    </el-menu>
  </div>
</template>

<script setup>
import MenuItem from './MenuItem'
import { reactive } from 'vue'
import { fliterMenu } from '../../../utils/menu'
const data = reactive([
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: '个人中心',
      icon: 'personnel'
    },
    children: []
  },
  {
    path: '/user',
    redirect: '/user/manage',
    meta: {
      title: '用户',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        meta: {
          title: '员工管理',
          icon: 'personnel-manage'
        },
        children: []
      },
      {
        path: '/user/role',
        name: 'userRole',
        meta: {
          title: '角色列表',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'userPermission',
        meta: {
          title: '权限列表',
          icon: 'permission'
        }
      }
    ]
  },
  {
    path: '/article',
    redirect: '/article/ranking',
    meta: {
      title: '文章',
      icon: 'article'
    },
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        meta: {
          title: '文章排名',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        meta: {
          title: '文章创建',
          icon: 'article-create'
        }
      }
    ]
  }
])
const newData = reactive(fliterMenu(data))
</script>

<style lang="scss" scoped></style>
