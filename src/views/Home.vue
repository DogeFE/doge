<template>
  <div>
    <Topnav />
    <div class="banner">
      <div class="banner-left">
        <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/43292672792245db9bd5aa7668b6bb9f~tplv-k3u1fbpfcp-zoom-1.image" alt="">
      </div>
      <div class="banner-right">
        <h1 class="banner-right__title">狗头人
        <br/>Vue3.0 UI 框架</h1>
        <p class="actions">
          <a class="" href="https://github.com/DogeFE/doge">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
      
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
  align-items: flex-end;
  
  &-left {
    margin-right: 64px;
  }
  &-right {
    
    .actions{
      padding: 8px 0;
      a {
        margin:0 8px;
        background: #FCDC00;
        display: inline-block;
        $h: 28px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 8px;
      }
    }
    &__title{
      font-weight: 300;
      margin: 0;
      font-size: 3.2em;
      font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    }
    
  }
}
</style>