// state 必须是函数
export const state = () => ({
  user: {
    username: "",
    uid: "",
    token: "",
  }
})
export const actions = {
  A_UPDATE_USER(state, value) {
    console.log(state, value);
  }
}

export const mutations = {
  M_UPDATE_USER(state, value) {
    state.user = value
    this.$cookies.set("user", value);
  }
}
