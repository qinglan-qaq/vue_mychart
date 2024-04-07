<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
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
