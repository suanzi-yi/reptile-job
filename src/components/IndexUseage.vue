<template>
  <div>
    <h1>应用场景</h1>
    <el-divider><i class="el-icon-s-opportunity"></i></el-divider>
    <!-- 卡组 -->
    <div class="container">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
h1 {
  margin: 0 auto;
  margin-top: 25px;
  text-align: center;
}
.container {
  margin: 0 auto;
  padding: 0 60px;
  height: 320px;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
}
.card {
  margin: 0 35px;
  width: 342px;
  height: 307px;
  border: dashed 1px #48c9d6;
}
</style>