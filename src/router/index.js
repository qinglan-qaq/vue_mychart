// import { createRouter, createWebHashHistory } from "vue-router";
// import indexPage from "../components/indexPage.vue";
// import RegPage from "../components/regPage.vue";

// // 为组件配置路径
// const routes = [
//   {
//     path: '/home',
//     component:()=> import ("../components/Home.vue")
//   },
//   {
//     path: '/reg',
//     component: RegPage,
//   },
// ];

// // 创建路由实例,并使用上述路由规则
// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
// });

// export default router;

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/Home.vue"),
  },
  {
    path: "/reg",
    component: () => import("../components/regPage.vue"),
  },
  {
    path: "/index",
    component: () => import("../components/indexPage.vue"),
  },
  {
    path: "/hello",
    component: () => import("../components/HelloWorld.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(), //括号里面可以不用写，要写你之前的import...的话，就在根目录新增.env文件，里面写一个BASE_URL进去
  routes,
});

export default router;
