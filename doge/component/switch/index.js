import DSwitch from "./src/switch.vue";

/* istanbul ignore next */
DSwitch.install = function (Vue) {
  Vue.component(DSwitch.name, DSwitch);
};

export default DSwitch;
