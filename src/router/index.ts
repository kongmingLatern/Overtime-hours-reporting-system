import { createRouter, createWebHistory } from "vue-router";
const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../components/HelloWorld.vue"),
    },
  ],
});

export default routes;
