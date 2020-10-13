import axios from 'axios'

export function request(config) {
  //1. 创建实例 
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios的拦截器
  instance.interceptors.request.use(conf =>{
    // console.log(conf );
    return conf
  }, err => {
    console.log(err );
  })

  instance.interceptors.response.use(res => {
    // console.log(res);
    // return res
    return res.data
  }, err=> {
    console.log(err);
  })

  //3. 发送请求
  return instance(config)

}