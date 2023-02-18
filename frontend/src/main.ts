import { createApp } from "vue";
import { createWebHistory } from "vue-router";
import createRouter from "./routes/index.js";
import "./style.css";
import App from "./App.vue";

const router = createRouter(createWebHistory());

router.beforeEach(async (to, from) => {
  if (!localStorage.token && to.name !== "Auth") {
    return { name: "Auth" };
  }
  if (localStorage.token && to.name !== "Main") {
    return { name: "Main" };
  }
});

createApp(App).use(router).mount("#app");
