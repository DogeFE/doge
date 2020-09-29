import DButton from "./src/button.vue";

/* istanbul ignore next */
DButton.install = function (Vue) {
  Vue.component(DButton.name, DButton);
};

export default DButton;