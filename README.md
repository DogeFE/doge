# doge
DogeMan‘s home
### 引入路由
### 创建首页和文档页

### 设计组件
  1.  交互逻辑
      1.  确定一个UI组件的交互需求
  2.  设计组件基本要素

    Attribute 给组件带来了声明式编程的能力 
    config带来了全局能力
    state带来了组件的内部状态的变化能力
    event让我们能够在组件结构信息
    lifeCycle带来了我们定义组件的方式
    children让我们可以按照一个树形的结构描述一个复杂的界面
    组件比较对象带来了。提供了这些部分的抽象能力
    组件化近现代处理UI最好的方式，组件化使用什么去承载都可以  用一个函数或者一个类

      - state
        - activeIndex
      - property
        - loop time imgList autoplay color forward
      - attribute
        - 分析分析会不会与property一样。 startIndex（只用一次）loop time imgList autoplay color forward
      - children
        - 2
      - event
        - change click hover swipe resize
      - method
        next() prev() goto()
        play() stop()
      - config
        - useRAF
        - UsesetInterval(tick, 16)
        - userTimeout
这些都是准备工作，大前提是你写出来的组件一定要好用

### 写代码步骤
  - 写 HTML
  - 写 CSS
  - 写 JS
  - 测试
  - 改写代码
  - 再测试
  - 改写代码
  - ...
  - 循环往复

### 目标：
  **pc端管理后台组件库（vue3.0）**
### 需求: 
1. 确定owner（项目经理）
    - 主要是项目进度跟踪，过程把控，人员沟通
2. 拉群（狗头人UI库分群）
    - 用于我们项目架构风格，迭代更新，任务派发等沟通交流  
3. 定义开发规范
    - 这个算是我们UI组件的基本标准，进行codereview的原则 
4. 落地基本组件（比较基础的）
   - 建群之后讨论出来，分派任务去开发
5. 项目工程化
   - 达到可npm install标准即可
6. 项目顾问
   标准：能够给与值得参考有价值的意见

### 人员要求：
  要有责任心和担当
  愿意沟通和耐心接受issue

### 能得到：
属于自己的开源UI库  一个面试的时候应该是硬通货，搞的好可以商业化，给其他企业使用
参与的越多收获就越多。
