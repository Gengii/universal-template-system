//! 引入axios
import axios from 'axios'
//! 引入 loading
import loading from './loading'
//! 引入md5
import md5 from 'md5'
//! 创建axios 实例
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
//! 请求拦截
http.interceptors.request.use(
  (config) => {
    //* 打开 loading
    loading.open()
    //! 请在课程主页中获取校验码，并通过请求头的 icode 属性进行传递
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
    return config
  },
  (error) => {
    //* 关闭loading加载
    loading.close()
    return Promise.reject(error)
  }
)
//* 响应拦截
http.interceptors.response.use(
  (resolve) => {
    //* 关闭loading加载
    loading.close()
    return resolve
  },
  (error) => {
    //* 关闭loading加载
    loading.close()
    return Promise.reject(error)
  }
)
//* 获取icode、
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}
//! 统一传参
const request = (opt) => {
  if (opt.methods === 'GET') {
    opt.params = opt.data || {}
  }
  return http(opt)
}
//* 导出 axios 实例对象
export default request
