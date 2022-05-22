<template>
  <div class="card">
    <div
      id="AbilityComparison"
      :style="{ width: '800px', height: '350px' }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.getdata();
    this.drawLine();
  },
  methods: {
    getdata() {
      this.$http
        .get("threeability")
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {});
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(
        document.getElementById("AbilityComparison")
      );
      // 绘制图表
      myChart1.setOption();
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
  padding-top: 20px;
}
</style>