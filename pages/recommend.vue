<template>
  <div>
    <h1>recommend</h1>
    <p>{{res}}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ API }) {
    console.log(API);
    let res = await API.systemInit();
    console.log("请求的数据", res);
    return { res };
  },
}
</script>

<style>

</style>