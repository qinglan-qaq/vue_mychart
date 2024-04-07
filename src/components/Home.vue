<template>
  <div>
    <div class="head">HOME</div>
    <div>
      <div class="side"></div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    displayName: "Home",
  },
};
</script>

<style>
</style>
