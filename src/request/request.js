 import axios from 'axios'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
 
// request 拦截器
service.interceptors.request.use(
  config => {
    // 在这里可以设置请求头、请求参数等return config

    
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
 
// response 拦截器
service.interceptors.response.use(
  response => {
    // 在这里处理返回数据const { data } = response
    if (data.code !== 200) {
      console.error('Error:', data.message)
      return Promise.reject(newError(data.message || 'Error'))
    } else {
      return data
    }
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
 
// 封装具体的请求方法: 四种请求类型不和下面的3和4标题内容放在一起
export const get = (url, params) => {
  return service .get(url, { params });
};
 
export const post = (url, data) => {
  return service .post(url, data);
};
 
export const put = (url, data) => {
  return service .put(url, data);
};
 
export const delete_data = (url, data) => {
  return service.delete(url, data);
};
 
export default service