const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint检查，不然随随便便就报错，比如定义/引入一个变量却没有使用
});
