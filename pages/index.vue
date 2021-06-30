<template>
  <div class="index">
    <Logo />
    <Video />
    <h3>{{ a }}+{{ b }}={{ a + b }}</h3>
  </div>
</template>

<script>
export default {
  // 中间件
  middleware(context) {
    console.log("pages, middleware");
  },
  // 参数校验
  validate({ params, query }) {
    return true;
  },
  // 读取数据 返回给组件
  asyncData(context) {
    return {
      b: 2,
    };
  },
  // 读取数据 返回给vuex
  fetch(store) {
  },
  data() {
    return {
      a: 1,
    };
  },
  created() {
  },
};
</script>

<style scoped>

</style>
