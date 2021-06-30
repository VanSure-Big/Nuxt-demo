<template>
  <div class="Header">
    <b-navbar toggleable="md" type="dark" fixed="top">
      <b-navbar-brand href="#">
        <img
          class="logo"
          src="http://www.maple-game.com/img/logo11.png"
          alt="Kitten"
        />
      </b-navbar-brand>

      <!-- 缩起 -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="justify-content-around">
        <b-navbar-nav class="">
          <b-nav-item to="/index" active>首页</b-nav-item>
          <b-nav-item to="/goods">表格</b-nav-item>
          <b-nav-item to="/recommend">Link</b-nav-item>
          <b-nav-item-dropdown>
            <template v-slot:button-content>
              <em>动态</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item to="/login">登录</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="fill"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  line-height: 1;
  background-color: rgba(0, 0, 0, 1);
}
.navbar-brand {
  padding: 0;
}
.nav-item {
  padding: 0 2.5rem !important;
}
.collapse {
  background-color: rgba(0, 0, 0, 1);
}
@media (min-width: 769px) {
  .fill {
    height: 80px;
  }
  .logo {
    height: 100%;
  }

  .navbar {
    padding: 0 0 0 15%;
  }
}
@media (max-width: 768px) {
  .fill {
    height: 60px;
  }
  .navbar {
    padding: 0px 1rem;
    height: 60px;
  }
  .logo {
    height: 60px;
  }
}
/* .router-main--active {
  color: #fff;
  background-color: #581;
} */
</style>