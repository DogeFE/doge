<template>
  <div>
    <h3 class="component-demo-title mg-t-0">进度条</h3>
    <div class="component-demo-box">
      <div style="width: 300px">
        <d-progress :percent="20" />
        <d-progress :percent="30" :show-text="false" />
        <d-progress :percent="30">
          <template v-slot:text>30</template>
        </d-progress>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  name: 'ProgressDemo',
  setup() {},
};
</script>
