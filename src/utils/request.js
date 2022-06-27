//! 引入axios
import axios from 'axios'
//! 引入 loading
import loading from './loading'
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
//* 导出 axios 实例对象
export default http
