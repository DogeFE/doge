<template>
  <div class="d-alert">
    <div
      class="d-alert-main"
      v-for="item in notices"
      :key="item.name"
    >
      <div class="d-alert-content">{{ item.content }}</div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import './Alert.scss'
let seed = 0;
// 获取一个唯一ID保证后续关闭正确的实例
function getUid () {
  return 'alert_' + (seed++);
}

export default {
  data () {
    return {
      notices: []
    }
  },
  methods: {
    add (notice) {
      const name = getUid();

      let _notice = Object.assign({
        name: name
      }, notice);

      this.notices.push(_notice);

      // 显示时长
      const duration = notice.duration;
      setTimeout(() => {
        this.remove(name);
      }, duration * 1000);
    },
    remove (name) {
      const notices = this.notices;

      for (let i = 0; i < notices.length; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1);
          break;
        }
      }
    }
  }
}
</script>
