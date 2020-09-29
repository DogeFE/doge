<template>
  <button :class="classes" class="d-button" v-bind="$attrs" :disabled="disabled">
    <span v-if="loading" class="d-loading"></span>
    
    <slot/></button>
</template>

<script>
import './Button.scss'
import { computed } from 'vue'
export default {
  name: 'DButton',
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    theme: {type: String, default: 'button'},
    level: {type: String, default: 'normal'},
    disabled: {type: Boolean, default: false},
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const {theme, size, level, loading, disabled} = props
    const classes = computed(() => {
      return {
        [`d-theme-${theme}`]: theme,
        [`d-size-${size}`]: size,
        [`d-level-${level}`]: level,
        [`d-loading`]: loading
      }
    })
    return {classes}
  }
}
</script>
