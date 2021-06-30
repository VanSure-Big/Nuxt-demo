<template>
  <div>
    <h1 v-if="error.statusCode">{{error.message}}</h1>
    <h1 v-else>应用发生异常</h1>
    <button @click="$router.go(-1)">跳转首页</button>
  </div>
</template>

<script>
export default {
  name: "error",
  // 接收错误信息
  props:['error'],
};
</script>

<style>
</style>