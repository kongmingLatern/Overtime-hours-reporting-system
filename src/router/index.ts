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
      name: RouterName.ADMIN,
      redirect: "/admin/overWorkPersonList",
      component: () => import("@/layout/Basic"),
      children: [
        {
          // NOTE: 加班人员列表
          path: "overWorkPersonList",
          name: RouterName.OVERWORKPERSONLIST,
          meta: {
            title: "加班人员列表",
          },
          component: () => import("@/pages/OverWorkPersonList.vue"),
        },
        {
          // NOTE: 员工查询
          path: "personSearch",
          name: RouterName.PERSONSEARCH,
          meta: {
            title: "员工查询",
          },
          component: () => import("@/pages/PersonSearch.vue"),
        },
        {
          // NOTE: 部门查询
          path: "departmentSearch",
          name: RouterName.DEPARTMENTSEARCH,
          meta: {
            title: "部门查询",
          },
          component: () => import("@/pages/DepartmentSearch.vue"),
        },
        {
          // NOTE: 项目维护
          path: "projectMaintain",
          name: RouterName.PROJECTMAINTAIN,
          meta: {
            title: "项目维护",
          },
          component: () => import("@/pages/ProjectMaintain.vue"),
        },
        {
          // NOTE: 生成报表
          path: "generateReports",
          name: RouterName.GENERATEREPORTS,
          meta: {
            title: "生成报表",
          },
          component: () => import("@/pages/GenerateReports.vue"),
        },
      ],
    },
    {
      path: "/timeReport",
      name: RouterName.RESPONSIVE,
      meta: {
        title: "管理填报信息",
      },
      component: () => import("@/pages/ResponsiveTimeReport.vue"),
    },
    {
      path: "/home",
      name: RouterName.HOME,
      redirect: "/home/index",
      meta: {
        title: "填报信息",
      },
      children: [
        {
          path: "index",
          name: RouterName.INDEX,
          component: () => import("@/pages/TimeReport.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: RouterName.LOGIN,
      meta: {
        title: "登陆",
      },
      component: () => import("@/pages/Login.vue"),
    },
  ],
});

// routes.addRoute()

export default routes;
