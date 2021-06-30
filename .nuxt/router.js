import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6750830a = () => interopDefault(import('..\\pages\\goods.vue' /* webpackChunkName: "pages/goods" */))
const _167ab462 = () => interopDefault(import('..\\pages\\goods\\_id.vue' /* webpackChunkName: "pages/goods/_id" */))
const _12bdd50e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _43ca8661 = () => interopDefault(import('..\\pages\\recommend.vue' /* webpackChunkName: "pages/recommend" */))
const _491631f7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/goods",
    component: _6750830a,
    name: "goods",
    children: [{
      path: ":id?",
      component: _167ab462,
      name: "goods/id"
    }]
  }, {
    path: "/login",
    component: _12bdd50e,
    name: "login"
  }, {
    path: "/recommend",
    component: _43ca8661,
    name: "recommend"
  }, {
    path: "/",
    component: _491631f7,
    name: "index"
  }, {
    path: "/index",
    component: _491631f7,
    name: "home"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
