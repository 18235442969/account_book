import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

// 路由信息
const routes: Array<RouteRecordRaw> = [
  {
      path: "/",
      name: "Index",
      component:  () => import('../views/login/index.vue'),
  }
];

// 导出路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router
