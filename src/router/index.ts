import { createRouter, createWebHistory } from "vue-router";
import { RouterName } from "./RouterName";
import { getToken } from "@/utils";
import { message } from "ant-design-vue";

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
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

routes.addRoute({
  path: "/:pathMatch(.*)*",
  name: RouterName.NOTFOUND,
  meta: {
    title: "404",
  },
  component: () => import("@/pages/NotFound.vue"),
});

routes.beforeEach((to, from, next) => {
  document.title = to.meta.title as string;

  if (getToken()) {
    const userType = localStorage.getItem("user_type");
    if (to.name === RouterName.LOGIN) {
      next({ name: RouterName.HOME });
    } else if (to.name === RouterName.RESPONSIVE) {
      next();
    } else if (to.name === RouterName.HOME && userType === "1") {
      next();
    } else if (to.name === RouterName.ADMIN && userType === "2") {
      next();
    }
  } else {
    // NOTE: 无 token 的情况下，如果是登录页，直接进入，否则跳转到登录页
    message.error("请先登录");
    next({ name: RouterName.LOGIN });
  }
  next();
});

// routes.addRoute()

export default routes;
