<template>
  <Header></Header>
  <div class="router">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header.vue';
import Footer from '@/components/Footer'
export default {
  name: "App"
};
</script>

<style>
.router {
  height: 400px;
  width: 400px;
  font-size: 40px;
  background-color: yellow;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
</style>
