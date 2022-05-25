import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import layout from "@/layout/index.vue";
const publicRoutes = [
  {
    path: "/",
    component: layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
        meta: {
          index: 1,
        },
      },
      {
        path: "/order",
        name: "order",
        component: () =>
          import(/* webpackChunkName: "order" */ "@/views/order/index.vue"),
        meta: {
          index: 1,
        },
      },
      {
        path: "/child",
        name: "child",
        component: () =>
          import(/* webpackChunkName: "child" */ "@/views/child/index.vue"),
        meta: {
          index: 3,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/login/index.vue"),

    meta: {
      index: 1,
    },
  },
];

const router = createRouter({
  history:
    process.env.NODE_ENV === "production"
      ? createWebHistory()
      : createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: publicRoutes,
});

export default router;
