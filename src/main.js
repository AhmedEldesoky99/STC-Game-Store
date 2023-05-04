import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";

//components
import home from "./pages/home.vue";
import details from "./pages/gameDetails.vue";
import notfound from "./pages/notfound.vue";

const routes = [
  {
    path: "/",
    alias: "/home",
    component: home,
  },
  {
    path: "/game/:id",
    component: details,
  },
  {
    path: "/:NotFound(.*)*",
    component: notfound,
  },
];
const router = createRouter({ history: createWebHistory(), routes });

createApp(App).use(router).mount("#app");
