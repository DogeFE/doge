<template>
  <div>
    <Switch v-model:value="bool"/>
  </div>
</template>
<script lang="ts">
import Switch from '../lib/switch/Switch.vue'
import { ref } from 'vue'
export default {
  components: {Switch},
  setup(){
    const bool = ref(false)
    return {bool}
  }
}
</script>