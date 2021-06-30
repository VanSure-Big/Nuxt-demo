# NuxtAdmin

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 生命周期 
```bash
# nuxtServerInit  使用场景是对store操作
# middleware
#中间件执行流程
  nuxt.config.js > 匹配布局 > 匹配页面
# validate 参数校验
```

## 路由 
```bash
# 约定式  
  展示区：<nuxt />
  声明式跳转： <nuxt-link :to="{name:'product-id',params:{id:3},query:{a:1,b:2}}">商品03</ nuxt-link>
  name: 路由别名  目录名（page文件夹下）-其他目录-文件名（不带下划线）
  params：对等文件名
  子路由：同上
```
## 路由首位
```bash
# 前置 依赖中间件middleware，插件
全局守卫：
    nuxt.config.js 指向middleware
    layouts 定义中间件
组件独享前置守卫
    middleware()
插件全局前置守卫
    nuxt.config.js中 plugins:[]

# 后置 
  使用vue beforRouteleave()
  插件全局后置守卫
  
```
## 数据交互
```bash
  安装：
    @nuxtjs/axios、@nuxtjs/proxy
    nuxt.config.js配置axios，proxy
```# Nuxt-demo
