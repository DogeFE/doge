<template>
  <router-view/>
</template>

<script>
import Doge from './components/Doge.vue'

export default {
  name: 'App',
  components: {
    Doge
  }
}
</script>
<style >
  #app {
    background: #fff;
  }
</style>
