<template>
  <div class="card">
    <div
      id="AbilityComparison"
      :style="{ width: '1000px', height: '600px' }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:[]
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.$http
        .get("/scrapy/threeability")
        .then((result) => {
          this.data = result.data.data;
          console.log(result);
          this.drawLine();
        })
        .catch((err) => {});
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(
        document.getElementById("AbilityComparison")
      );
      let option = {
        title: {
          text: "不同位置top50球员数据比较",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["交叉位置", "后卫", "前锋","中锋"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "出场时间",
            "三分命中率",
            "罚球命中率",
            "进攻效率",
            "防守效率",
            "篮板",
            "助攻",
            "抢断",
            "盖帽",
            "失误",
            "犯规",
            "得分",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "交叉位置",
            type: "line",
            // stack: "Total",
            // data: [120, 132, 101, 134, 90, 230, 210],
            data: this.data[0],
          },
          {
            name: "后卫",
            type: "line",
            // stack: "Total",
            // data: [220, 182, 191, 234, 290, 330, 310],
            data: this.data[1],
          },
          {
            name: "前锋",
            type: "line",
            // stack: "Total",
            // data: [150, 232, 201, 154, 190, 330, 410],
            data: this.data[2],
          },
          {
            name: "中锋",
            type: "line",
            // stack: "Total",
            // data: [320, 332, 301, 334, 390, 330, 320],
            data:this.data[3],
          }
        ],
      };
      // 绘制图表
      myChart1.setOption(option);
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