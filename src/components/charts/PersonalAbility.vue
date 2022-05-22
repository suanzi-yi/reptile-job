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
    <div
      id="PersonalAbility"
      :style="{ width: '800px', height: '350px' }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "选项1",
    };
  },
  mounted() {
    this.getdata();
    this.drawLine();
  },
  methods: {
    getdata(value = this.value) {
      this.$http
        .get("onedata?name=" + value)
        .then((result) => {
          console.log(result);
          if(result.data.status==1){
              this.$message.success('球员数据拉取成功！')
          }
        })
        .catch((err) => {});
    },
    getchange(value) {
      console.log(value);
      this.getdata(value);
      this.drawLine();
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(
        document.getElementById("PersonalAbility")
      );
      // 绘制图表
      myChart1.setOption();
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
#cahrt-warp {
  margin: 0 auto;
}
</style>