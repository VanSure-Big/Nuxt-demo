export default function ({ $axios, redirect, route, store, $cookies }, inject) {
  // 基本设置
  console.log("当前环境:", process.env.NODE_ENV);
  console.log("当前接口:", process.env.BASEURL);
  const api = $axios.create({
    baseURL: process.env.BASEURL,
    timeout: 15000,// 超时
  })
  // 请求拦截
  api.onRequest(config => {
    console.log("请求拦截");
    config.headers.token = store.state.user.user.token?store.state.user.user.token:'';
    return config
  })
  // 响应拦截
  api.onResponse(res => {
    console.log("响应拦截", res.status);
    if (res.status == "200") {
      return res.data
    }else{
      console.log("响应错误");
      route.push('/login')
    }
  })
  // 错误操作
  api.onError(err => {
    console.log("错误操作", err);
  })

  inject('api', api)
}