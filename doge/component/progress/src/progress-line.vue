<template>
  <div class="d-progress-line">
    <div class="d-progress-line-container">
      <div class="d-progress-line-wrap">
        <div class="d-progress-line-bg" :style="lineBgStyle"></div>
      </div>
    </div>
    <!-- 展示的进度内容 -->
    <div class="d-progress-text" v-if="showText">
      <slot name="text">{{ format(percent) }} </slot>
    </div>
  </div>
</template>

<script>
import propsCommon from './props';

export default {
  props: {
    ...propsCommon,
  },
  data() {
    return {};
  },
  computed: {
    // 进度条样式
    lineBgStyle() {
      return {
        width: `${this.percent}%`,
        height: '6px',
      };
    },
  },
};
</script>
