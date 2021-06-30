import { wrapFunctional } from './utils'

export { default as Loading } from '../..\\components\\loading.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Video } from '../..\\components\\Video.vue'

export const LazyLoading = import('../..\\components\\loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyVideo = import('../..\\components\\Video.vue' /* webpackChunkName: "components/video" */).then(c => wrapFunctional(c.default || c))
