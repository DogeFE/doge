import { createApp } from "vue";
import "./lib/doge.scss"
import "./index.scss";
import App from "./App.vue";
import { router } from './router';
import Doge from 'doge'
const app = createApp(App);
app.use(Doge)
app.use(router);
app.mount("#app");
