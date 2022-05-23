<template>
  <div class="card">
    <div class="selected">
      <span>&nbsp;&nbsp;&nbsp;&nbsp;选择球员：</span>
      <el-select v-model="value" placeholder="请选择" @change="getchange">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="cahrt-warp">
      <div
        id="PersonalAbility"
        :style="{ width: '1000px', height: '600px' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "giannis_antetokounmpo",
          label: "giannis_antetokounmpo",
        },
        {
          value: "kevin_durant",
          label: "kevin_durant",
        },
        {
          value: "luka_don",
          label: "luka_don",
        },
        {
          value: "nikola_jokic",
          label: "jimmy_butler",
        },
        {
          value: "ja_morant",
          label: "ja_morant",
        },
        {
          value: "brandon_ingram",
          label: "brandon_ingram",
        },
        {
          value: "jayson_tatum",
          label: "jayson_tatum",
        },
        {
          value: "stephen_curry",
          label: "stephen_curry",
        },
        {
          value: "donovan_mitchell",
          label: "donovan_mitchell",
        },
        {
          value: "anthony_edwards",
          label: "anthony_edwards",
        },
      ],
      value: "giannis_antetokounmpo",
      data: [],
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata(value = this.value) {
      this.$http
        .get("onedata?name=" + value)
        .then((result) => {
          console.log(result);
          if (result.data.status == 1) {
            this.data = result.data.data[0];
            console.log("==>", this.data);
            this.$message.success("球员数据拉取成功！");
            this.drawLine();
          }
        })
        .catch((err) => {});
    },
    getchange(value) {
      console.log(value);
      this.getdata(value);
      // this.drawLine();
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(
        document.getElementById("PersonalAbility")
      );
      let data = this.data;
      console.log("data==>", data);
      //设置
      let option = {
        title: { text: `球员${this.value}能力图`, x: "center" },
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [50, 250],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: this.data,
          },
        ],
      };
      // 绘制图表
      myChart1.setOption(option);
      //
      myChart1.resize();
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 20px 0;
  padding-top: 20px;
  position: relative;
}

.select {
  display: inline-block;
  margin-bottom: 10px;
}
.cahrt-warp {
  display:flex;
  width: 100%;
  justify-content: center;
}
</style>