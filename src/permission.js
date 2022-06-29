import router from './router'
import store from './store'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      next()
    }
  } else {
    if (to.path.includes(whiteList)) {
      next()
    } else {
      next('/login')
    }
  }
})
