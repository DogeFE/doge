1. vue3会将事件传递给组件的最外层dom
### Vue3 属性绑定

- 默认所有属性都绑定到根元素
- 使用inheritAttrs: false 可以取消默认绑定
- 使用 $attrs 或者 context.attrs 获取所有属性
- 使用 v-bind=“$attrs”批量绑定属性
- 使用 const {size, ...rest} = context.attrs 将属性（attrs）属性分开

### props VS attrs 
. 区别如下
- props 要先声明才能取值， attrs不用先声明
- props 不包含事件, attrs 包含
- props 支持string 以外的类型， attrs 只有 String 类型

了解一个东西最好的方式就是使用console.log(THIS)打印出来
在vue里面 没有在props里面声明的东西，会在attrs里面出现

### 如何让button 支持theme属性

### UI库 CSS 的两个注意事项
#### - 不能使用scoped
- 因为 data-v-xxx 中的 xxx 每次运行可能不同
- 必须输出稳定不变的class选择器，方便使用者覆盖

#### - 必须加前缀（相当于命名空间）

d-button 相当于命名空间

  ### Css影响最小原则