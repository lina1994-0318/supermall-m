import axios from 'axios'

export function request(config) {
  // 1. 创建 axios 的实例
  const instance = axios.create({
    baseURL: "https://www.fastmock.site/mock/c1d14b9de3d96e582d7eb71286baf25c/supermall/api",
    timeout: 5000
  })

  // 2. axios的拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    return config;
  }, err => {

  })

  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {

  })

  // 3. 发送真正的网络请求
  return instance(config)
}
