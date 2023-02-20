import { createApp } from "vue";
import { createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import createRouter from "./routes/index.js";
import "./style.css";
import App from "./App.vue";
import axios from "./plugins/axios";

const router = createRouter(createWebHistory());
const store = createPinia();

router.beforeEach(async (to, from) => {
  if (!localStorage.token && to.name !== "Auth") {
    return { name: "Auth" };
  }
  if (localStorage.token && to.name !== "Main") {
    return { name: "Main" };
  }
});

createApp(App)
  .use(router)
  .use(store)
  .use(axios, {
    baseUrl: "https://",
  })
  .mount("#app");
