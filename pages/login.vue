<template>
  <!-- <div>1</div> -->
  <div class="login">
    <b-button block pill variant="info" class="loginButton" @click="Login"
      >Info</b-button
    >
  </div>
</template>

<script>
export default {
  methods: {
    Login() {
      console.log("登录中！");
      let user = {
        username: "Zio",
        uid: "1",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50SWQiOjEsImlzcyI6ImF1dGgwIiwiZXhwIjoxNjI0ODg1MDI5LCJ1c2VybmFtZSI6ImFkbWluMTIzIn0.gXcEgGNNmURxBSnibQ879W_20_3uqMM5wk_XvrpHFrE",
      };
      this.$store.commit("user/M_UPDATE_USER", user);
      this.$router.replace("/recommend");
    },
  },
};
</script>
<style scoped>
.loginButton {
  width: 50%;
  position: fixed;
  top: 50%;
  left: 25%;
  margin-top: -40px;
}
</style>