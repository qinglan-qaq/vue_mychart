import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 应该先使用use方法注册路由器实例到应用程序中，再将应用程序挂载到指定的 DOM 元素上
createApp(App).use(router).use(ElementPlus).mount("#app");
