import { createApp } from 'vue'
import App from './App.vue'
import {createWebHashHistory, createRouter} from 'vue-router'
import Doc from './views/Doc.vue'
import Home from './views/Home.vue'
import './index.css'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    { path: "/doc", component: Doc },
    { path: "/", component: Home },
  ],
});

const app = createApp(App)
app.use(router)
app.mount('#app')
