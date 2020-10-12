<template>
  <div>
    <div class="component-demo-box">
      <div>
        <d-button
          size="big"
          theme="text"
          level="main"
          @click="onClick"
        >显示弹窗</d-button>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "DAlertDemo",
  methods: {
    onClick() {
      this.$alert({
        content: "我是一个弹窗",
        duration: 3,
      });
    },
  },
};
</script>