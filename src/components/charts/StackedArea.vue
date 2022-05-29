<template>
  <div class="card">
    <div id="StackedArea" :style="{ width: '1000px', height: '600px' }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.getdata();
    
  },
  methods: {
    getdata() {
      this.$http
        .get("/scrapy/top5")
        .then((result) => {
          console.log("top5", result);
          this.data = result.data.data;
          this.drawLine()
        })
        .catch((err) => {});
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(document.getElementById("StackedArea"));
      //数据
      let option = {
        title: {
          text: "不同球星能力值计算及对比",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["得分", "效率", "进攻", "防守", "团队"],
          // "阿德托昆博", "杜兰特", "库里", "保罗", "恩比德"
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["阿德托昆博", "杜兰特", "库里", "保罗", "恩比德"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "得分",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            // data: [120, 132, 101, 134, 90, 230, 210],
            data: this.data[0],
          },
          {
            name: "效率",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            // data: [220, 182, 191, 234, 290, 330, 310],
            data: this.data[1],
          },
          {
            name: "进攻",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            // data: [150, 232, 201, 154, 190, 330, 410],
            data: this.data[2],
          },
          {
            name: "防守",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            // data: [320, 332, 301, 334, 390, 330, 320],
            data: this.data[3],
          },
          {
            name: "团队",
            type: "line",
            stack: "Total",
            label: {
              show: true,
              position: "top",
            },
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            // data: [820, 932, 901, 934, 1290, 1330, 1320],
            data: this.data[4],
          },
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