<template>
  <div>
    <h3 > 示例1 </h3>
    <div class="component-demo-box">
      <d-button theme="button">button</d-button>
      <d-button theme="link">link</d-button>
      <d-button theme="text">text</d-button>
    </div>
    

    <h3 class="mg-t-normal"> 示例2 </h3>
    <div class="component-demo-box">
      <div>
        <d-button size="big">big</d-button>
        <d-button size="normal">normal</d-button>
        <d-button size="small">small</d-button>
      </div>
      <div>
        <d-button size="big" theme="link">big</d-button>
        <d-button size="normal" theme="link">normal</d-button>
        <d-button size="small" theme="link">small</d-button>
      </div>
      <div>
        <d-button size="big" theme="text">big</d-button>
        <d-button size="normal" theme="text">normal</d-button>
        <d-button size="small" theme="text">small</d-button>
      </div>
    </div>

    <h3 class="mg-t-normal"> 示例3 </h3>
    <div class="component-demo-box">
      <div>
        <d-button size="big" level="main">big</d-button>
        <d-button size="normal" level="normal">normal</d-button>
        <d-button size="small" level="danger">small</d-button>
      </div>
      <div>
        <d-button size="big" theme="link" level="main">big</d-button>
        <d-button size="normal" theme="link" level="normal">normal</d-button>
        <d-button size="small" theme="link" level="danger">small</d-button>
      </div>
      <div>
        <d-button size="big" theme="text" level="main">big</d-button>
        <d-button size="normal" theme="text" level="normal">normal</d-button>
        <d-button size="small" theme="text" level="danger">small</d-button>
      </div>
    </div>
    <h3 > 示例4 </h3>
    <div class="component-demo-box">
      <d-button theme="button" disabled>按钮禁止使用</d-button>
      <d-button theme="link" disabled>链接 禁止使用</d-button>
      <d-button theme="text" disabled>文本禁止使用</d-button>
    </div>
    <h3 > 示例5 </h3>
    <div class="component-demo-box">
      <d-button theme="button" loading>按钮loading</d-button>
      <d-button theme="link" loading>链接 loading</d-button>
      <d-button theme="text" loading>文本loading</d-button>
    </div>
  </div>
</template>

<script lang="ts">
import DButton from '../lib/button/Button.vue'
export default {
  name: 'DButtonDemo',
  components: {
    DButton
  },
 setup() {
   const onClick = () => {
     console.log('Hi!!!')
   }
   return { onClick }
 }
}
</script>