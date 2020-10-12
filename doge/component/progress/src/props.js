export default {
  // 内容的模板函数
  format: {
    type: Function,
    default: (percent) => `${percent}%`,
  },
  // 百分比
  percent: {
    type: Number,
    default: 0,
  },
  // 是否显示进度数值或状态图标
  showText: {
    type: Boolean,
    default: true,
  },
  // 进度的端点形状 可选 round square
  strokeLinecap: {
    type: String,
    default: 'round',
  },
  // 进度条的色彩
  strokeColor: {
    type: String,
    default: '',
  },
  // 是否在进度条内部
  textInside: {
    type: Boolean,
    default: false,
  },
};
