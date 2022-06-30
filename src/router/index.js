import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout'
// 公有路由表
const publicsRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login')
  },
  {
    path: '/',
    component: () => import('../layout/index'),
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/errorpages/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('../views/errorpages/401')
      }
    ]
  }
]
const privateRouter = [
  {
    path: '/user',
    name: 'user',
    component: Layout,
    redirect: '/user/manage',
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        component: () => import('../views/user-manage')
      },

      {
        path: '/user/import',
        name: 'userimport',
        component: () => import('../views/user-import')
      },
      {
        path: '/user/role',
        name: 'userrole',
        component: () => import('../views/user-role')
      },
      {
        path: '/user/info',
        name: 'userinfo',
        component: () => import('../views/user-info')
      },
      {
        path: '/user/permission',
        name: 'permission',
        component: () => import('../views/user-permission')
      }
    ]
  },
  {
    path: '/article',
    name: 'article',
    component: () => Layout,
    redirect: '/article/ranking',
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        component: () => import('../views/article-ranking')
      },
      {
        path: '/article/Create',
        name: 'articleCreate',
        component: () => import('../views/articleCreate')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicsRoutes, ...privateRouter]
})

export default router
