import { createRouter, createWebHistory } from "vue-router";
import { RouterName } from "./RouterName";

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/admin",
    },
    {
      path: "/admin",
      name: RouterName.Admin,
      redirect: "/admin/overWorkPersonList",
      component: () => import("@/layout/Basic"),
      children: [
        {
          // NOTE: 加班人员列表
          path: "overWorkPersonList",
          name: RouterName.OverWorkPersonList,
          component: () => import("@/pages/OverWorkPersonList.vue"),
        },
        {
          // NOTE: 员工查询
          path: "personSearch",
          name: RouterName.PersonSearch,
          component: () => import("@/pages/PersonSearch.vue"),
        },
        {
          // NOTE: 部门查询
          path: "departmentSearch",
          name: RouterName.DepartmentSearch,
          component: () => import("@/pages/DepartmentSearch.vue"),
        },
        {
          // NOTE: 项目维护
          path: "projectMaintain",
          name: RouterName.ProjectMaintain,
          component: () => import("@/pages/ProjectMaintain.vue"),
        },
        {
          // NOTE: 生成报表
          path: "generateReports",
          name: RouterName.GenerateReports,
          component: () => import("@/pages/GenerateReports.vue"),
        },
      ],
    },
    {
      path: "/home",
      name: RouterName.Home,
      redirect: "/home/index",
      children: [
        {
          path: "index",
          name: RouterName.Index,
          component: () => import("@/pages/ResponsiveTimeReport.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: RouterName.Login,
      component: () => import("@/pages/Login.vue"),
    },
  ],
});

export default routes;
