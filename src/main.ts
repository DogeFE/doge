import { createApp } from "vue";
import Alert from "../doge/component/alert/index.js";
import "../../doge/style/doge.scss";
import "./index.scss";
import App from "./App.vue";
import { router } from "./router";
import Doge from "../../doge/src/index.js";

// Vue.prototype.$Alert = Alert;

const app = createApp(App);
app.config.globalProperties.$alert = Alert;
console.log(app);
app.use(Doge);
app.use(router);
app.mount("#app");
