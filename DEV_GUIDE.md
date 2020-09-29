## 第一版规范

### 第一步: 确定组件库目录结构
![组件目录结构](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/181db1facabe4615af7fa318acb29179~tplv-k3u1fbpfcp-zoom-1.image)
### 第二步： 组件设计文档规范
  1. 根据winter老师组件化的基础七要素和市面上去设计组件，并写出自己的设计文档
  2. 文档格式案例，可以借鉴Button
  ```md 
      ### button
      ### Properties
          - size: 按钮的尺寸
          - theme: 按钮的主体
          - level: 按钮等级
          - disabled: 按钮是否显示
          - loading: 按钮加载态
      ### Methods
          - 无
      ### Inherit
          - 无
      ### Attribute（自生属性）
          - size: 按钮的尺寸
          - theme: 按钮的主体
          - level: 按钮等级
          - disabled: 按钮是否显示
          - loading: 按钮加载态
      ### Config & State
          - 无
      ### Event
          - 继承默认事件
      ### Children
          无
      ### 示例
      src/components/ButtonDemo.vue
  ```
### 第三步：全局引入组件和局部引入组件
1. 局部 
   1. 文件在组件下的index.js 
```js
  import DButton from "./src/button.vue";

  /* istanbul ignore next */
  DButton.install = function (Vue) {
    Vue.component(DButton.name, DButton);
  };

  export default DButton;
```
做了这不操作我们就可以按需引入组件
```js
import {DButton} from 'doge'
```
2. 全局引入组件
   文件在 doge/src/index.js

   每次我们新开发组件了。就都需要在这里注册一下
```js
// 第一步 导入组件
import Button from '../component/button/index'
import Switch from '../component/switch/index'
// 第二步： 放入数组中
let components = [
  Button,
  Switch,
];
class Doge {
    constructor(){

    }
    static install(Vue){
        components.forEach((component) => {
            Vue.component(component.name, component);
        });
    }
}
export default Doge
```
可以全局引入组件这样就不需要在业务组件里面 去import组件
```js
import Doge from 'doge'
app.use(Doge)
```

### 第四步： 写样式文档

参照 ButtonDemo书写，这是最基础的了，不能比这个还简陋，我们可以慢慢精进，参照市面上的开源组件库