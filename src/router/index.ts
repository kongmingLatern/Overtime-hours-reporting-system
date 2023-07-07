import { createRouter, createWebHistory } from "vue-router";
const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/admin",
    },
    {
      path: "/admin",
      name: "admin",
      redirect: "/admin/overWorkPersonList",
      component: () => import("@/layout/Basic"),
      children: [
        {
          // NOTE: 加班人员列表
          path: "overWorkPersonList",
          name: "overWorkPersonList",
          component: () => import("@/pages/OverWorkPersonList.vue"),
        },
        {
          // NOTE: 员工查询
          path: "personSearch",
          name: "personSearch",
          component: () => import("@/pages/PersonSearch.vue"),
        },
        {
          // NOTE: 部门查询
          path: "departmentSearch",
          name: "departmentSearch",
          component: () => import("@/pages/DepartmentSearch.vue"),
        },
        {
          // NOTE: 项目维护
          path: "projectMaintain",
          name: "projectMaintain",
          component: () => import("@/pages/ProjectMaintain.vue"),
        },
        {
          // NOTE: 生成报表
          path: "generateReports",
          name: "generateReports",
          component: () => import("@/pages/GenerateReports.vue"),
        },
      ],
    },
  ],
});

export default routes;
