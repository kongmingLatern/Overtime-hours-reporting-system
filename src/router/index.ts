import { createRouter, createWebHistory } from "vue-router";
const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("@/pages/OverWorkPersonList.vue"),
    },
    {
      path: "/home1",
      component: () => import("@/pages/WorkHome.tsx"),
    },
  ],
});

export default routes;
