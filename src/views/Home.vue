<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>DogeUI</h1>
      <h2>正在学习组件化的UI 框架</h2>
      <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/43292672792245db9bd5aa7668b6bb9f~tplv-k3u1fbpfcp-zoom-1.image" alt="">
      <p class="actions">
        <a href="https://github.com/DogeFE/doge">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>