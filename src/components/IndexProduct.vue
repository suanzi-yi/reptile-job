<template>
  <div>
    <h1>产品功能</h1>
    <el-divider><i class="el-icon-s-data"></i></el-divider>
    <!-- 卡组 -->
    <div class="container">
      <div class="card">1</div>
      <div class="card">2</div>
      <div class="card">3</div>
      <div class="card">4</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
}
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
}
.card {
  height: 450px;
  width: 320px;
  margin: 0 20px;
  box-shadow: 0px 0px 19px 1px rgba(123, 123, 123, 0.4);
  border-radius:5px;
  border: solid 1px #48c9d6;
}
</style>