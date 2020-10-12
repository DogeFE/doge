<template>
  <div
    class="d-progress"
    :class="{
      'd-progress-show-text': showText,
      'd-progress-text-inside': textInside,
    }"
  >
    <!-- 圆形 -->
    <progress-circle v-bind="$props" v-if="type === 'circle'" />
    <!-- 仪表盘 -->
    <progress-dashboard v-bind="$props" v-else-if="type === 'dashboard'" />
    <!-- 直线 -->
    <progress-line v-bind="$props" v-else>
      <template v-slot:text v-if="$slots.text">
        <slot name="text" />
      </template>
    </progress-line>
  </div>
</template>
<script>
import './progress.scss';
import propsCommon from './props';

import ProgressLine from './progress-line.vue';
import ProgressCircle from './progress-circle.vue';
import ProgressDashboard from './progress-dashboard.vue';

export default {
  name: 'DProgress',
  props: {
    // 类型，可选 line circle dashboard	string
    type: {
      type: String,
      default: 'line',
    },
    ...propsCommon,
  },
  components: {
    ProgressLine,
    ProgressCircle,
    ProgressDashboard,
  },
  data() {
    return {};
  },
};
</script>
