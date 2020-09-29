<template>
  <div>
    <d-switch v-model:value="bool"/>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  setup(){
    const bool = ref(false)
    return {bool}
  }
}
</script>