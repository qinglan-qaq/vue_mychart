<template>
  <!-- 创建头部 -->
  <div>
    <div class="header">
      <div class="logo">Logo</div>
      <div>
        <div class="account">account</div>
        <div class="setting">setting</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  height: 30%;
  width: 97%;

  padding: 20px;
  margin: 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid red;
}

.logo {
  text-align: center;
}
.account,
.setting {
  margin-left: 30px;
}
</style>
