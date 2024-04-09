import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 如果您正在使用CDN引入，请删除下面一行。
const ElementPlusIconsVue = require('@element-plus/icons-vue');

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 应该先使用use方法注册路由器实例到应用程序中，再将应用程序挂载到指定的 DOM 元素上
createApp(App).use(router).use(ElementPlus).mount("#app");
