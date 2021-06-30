export const actions = {
  nuxtServerInit(store, { $cookies }) {
    // console.log('nuxtServerInit',$cookies );
    let user = $cookies.get("user") ? $cookies.get("user"):{}
    store.commit('user/M_UPDATE_USER', user)
  }
}