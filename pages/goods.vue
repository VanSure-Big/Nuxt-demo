<template>
  <div>
    <h1>{{ goods_id }}</h1>
    <nuxt-link
      active-class="router-second--active"
      :to="{ name: 'goods/id', params: { id: 1 } }"
      >商品01</nuxt-link
    >
    <nuxt-link
      active-class="router-second--active"
      :to="{ name: 'goods/id', params: { id: 2 } }"
      >商品02</nuxt-link
    >
    <nuxt-link active-class="router-second--active" to="/goods/3"
      >商品03</nuxt-link
    >
    <nuxt-child keep-alive :goodsId="goods_id"></nuxt-child>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods_id: 1,
    };
  },
  created() {
    this.$router.push({ path: "/goods/1" }); // 页面加载时跳转
  },
  head() {
    return this.$seo(this.goods_id, `此商品为：商品${this.goods_id}`, [{}]);
  },
  watch: {
    $route: {
      handler(val, oldVal) {
        console.log(val.params.id);
        this.goods_id = val.params.id;
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.router-second--active {
  color: #fff;
  background-color: rgb(13, 240, 153);
}
</style>