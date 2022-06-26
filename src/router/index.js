import { createRouter, createWebHashHistory } from 'vue-router'

// 公有路由表
const publicsRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicsRoutes
})

export default router
