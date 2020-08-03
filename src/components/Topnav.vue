<template>
<div class="topnav-wapper">
  <div class="topnav">
    <div class="logo"><img src="../assets/favicon.png" alt="" width="24">DogeUI</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</div>
  
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
.topnav-wapper {
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 1px 1px rgba(0,0,0,.08);
}
.topnav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  padding: 16px 36px;
  margin: 0 auto;
  > .logo {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    justify-content: content;
    align-items: center;
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>