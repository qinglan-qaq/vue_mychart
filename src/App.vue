<template>
  <div>
    <div class="common-layout">
      <div class="head">
        <Header></Header>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "@/components/Footer";
import SideBar from "./components/sideBar.vue";
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
.common-layout {
  /* border: 2px slide black; */
}
.head {
}

.main {
  /* height: 400px;
  width: 400px; */
  font-size: 40px;
  background-color: yellow;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
</style>
