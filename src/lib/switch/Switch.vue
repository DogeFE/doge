<template>
<div class="d-switch">
  <button @click="toggle" :class="{checked:value}">
    <span></span>
  </button>
</div>
  
</template>
<script lang="ts">
import './switch.scss'
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  }
};
</script>