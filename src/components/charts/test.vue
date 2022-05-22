<template>
  <div class="card">
    <div class="selected">
      选择球员:<el-select v-model="value" placeholder="请选择" @change="getchange">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <button @click="add">+++1</button>
    <div id="cahrt-warp" :style="{ width: '800px', height: '350px' }"></div>
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
      data:[55, 66, 100, 110, 110, 112, 112, 115, 120, 150]
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    add(){
      for(var i = 0; i <this.data.length; i++){
         this.data[i]++;
      }
      console.log(this.data);
      this.drawLine();
    },
    getchange(value){
      console.log(value);
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(document.getElementById("cahrt-warp"));
      // 绘制图表
      myChart1.setOption({
        title: { text: "整改场所排名（总次数）", x: "center" },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "6%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          data: [
            "场所4",
            "场所6",
            "场所10",
            "场所1",
            "场所8",
            "场所5",
            "场所9",
            "场所7",
            "场所2",
            "场所3",
          ],
          axisTick: {
            alignWithLabel: true,
          },
        },
        series: [
          {
            name: "次数",
            type: "bar",
            itemStyle: {
              normal: {
                //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                color: function (params) {
                  // build a color map as your need.
                  var colorList = [
                    "#C1232B",
                    "#B5C334",
                    "#FCCE10",
                    "#E87C25",
                    "#27727B",
                    "#FE8463",
                    "#9BCA63",
                    "#FAD860",
                    "#F3A43B",
                    "#60C0DD",
                    "#D7504B",
                    "#C6E579",
                    "#F4E001",
                    "#F0805A",
                    "#26C0C0",
                  ];
                  return colorList[params.dataIndex];
                },
                //以下为是否显示，显示位置和显示格式的设置了
                label: {
                  show: true,
                  position: "right",
                  //                             formatter: '{c}'
                  formatter: "{c}",
                },
              },
            },
            //设置柱的宽度，要是数据太少，柱子太宽不美观~
            barWidth: 10,
            // data: [55, 66, 100, 110, 110, 112, 112, 115, 120, 150],
            data:this.data
          },
        ],
      });
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
#cahrt-warp{
  margin: 0 auto;
}
</style>