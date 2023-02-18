import { createRouter } from "vue-router";
import Auth from "../components/Auth.vue";
import Main from "../components/Main.vue";

const routes = [
  {
    path: "/",
    component: Main,
    name: "Main",
  },

  {
    path: "/auth/",
    component: Auth,
    name: "Auth",
  },
];

export default function (history) {
  return createRouter({
    history,
    routes,
  });
}
