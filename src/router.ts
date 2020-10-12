import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import AlertDemo from "./components/AlertDemo.vue";
import ProgressDemo from "./components/ProgressDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import kael from "./views/kael.vue";

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    { path: "/kael", component: kael },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", component: DocDemo },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "alert", component: AlertDemo },
        { path: "tabs", component: TabsDemo },
        { path: "progress", component: ProgressDemo },
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});
