<template>
  <div class="goods_id">商品：{{ goodsId }}</div>
</template>

<script>
export default {
  name: "goods_detail",
  props: ['goodsId'],
  data() {
    // return {
    //   goods_id: 1,
    // };
  },
  // head() {
  //   return this.$seo(this.goods_id, `此商品为：商品${this.goods_id}`, [{}]);
  // },
  // watch: {
  //   $route: {
  //     handler(val, oldVal) {
  //       console.log(val.params.id);
  //       this.goods_id = val.params.id;
  //     },
  //     deep: true,
  //   },
  // },
};
</script>

<style>
</style>