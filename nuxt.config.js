export default {
  server: {
    port: 3001,
    host: '0.0.0.0'
  },
  env: {
    // BASEURL: process.env.NODE_ENV === 'production' ? 'http://192.168.10.41:8080/service' : 'http://192.168.10.41:8080/service'
    BASEURL: process.env.NODE_ENV === 'production' ? 'Api' : 'devApi'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/transition.css',
    '~/assets/css/bootstrap.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios' },
    { src: '~/plugins/api' },
    { src: '~/plugins/mixins' }
  ],

  axios: {
    proxy: true,
  },
  proxy: {
    '/devApi': {
      target: 'http://192.168.10.41:8080/service',
      changeOrigin: true,
      pathRewrite: {
        '^/devApi': ''
      }
    },
    '/Api': {
      target: 'http://192.168.10.41:8080/service',
      changeOrigin: true,
      pathRewrite: {
        '^/Api': ''
      }
    },
  },

  router: {
    middleware: 'auth',
    //路由拆分器
    routeNameSplitter: '/',
    // 扩展路由
    extendRoutes(router, resolve) {
      router.push({
        name: 'home',
        path: '/index',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },

  //自定义loading组件
  loading: '~/components/loading.vue',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NuxtAdmin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

}
