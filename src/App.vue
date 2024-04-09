<template>
    <div class="common-layout">
    <el-container>
      <el-header class="head">
        <Header></Header>
      </el-header>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "@/components/Footer";
import SideBar from './components/sideBar.vue';
export default {
  name: "App",
  components: {
    Header,
    Footer,
    SideBar,
  },
};
</script>

<style>
.common-layout{
  border: 2px slide black;
}
.side {
  height: 400px;
  width: 200px;
  background-color: red;
}

.head {
  
}

.router {
  /* height: 400px;
  width: 400px; */
  font-size: 40px;
  background-color: yellow;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
</style>
