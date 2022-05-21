<template>
  <div class="all">
    <!-- 卡片组 -->
    <div class="card-warp">
      <div class="card">
        <img src="../../assets/nba-icon.png" alt="">
      </div>
      <div class="card">
        <img src="../../assets/hp.jpg" alt="">
      </div>
      <div class="card">
         <img src="../../assets/dqd-logo.png" alt="">
      </div>
    </div>
    <!-- ul组 -->
    <div class="url-warp">
      <el-table :data="tableData">
        <el-table-column prop="id" label="ID" width="180">
        </el-table-column>
        <el-table-column prop="name" label="官网名称" width="180">
        </el-table-column>
        <el-table-column prop="address" label="url地址"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "1",
          name: "NBA中文网",
          address: "https://nbachina.qq.com/",
        },
        {
          id: "2",
          name: "虎扑体育网",
          address: "https://www.hupu.com/",
        },
        {
          id: "3",
          name: "中国足球协会",
          address: "https://www.thecfa.cn/",
        },
        {
          id: "4",
          name: "中国乒乓球协会",
          address: "https://www.ctta.cn/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.all {
  height: 100%;
  width: 100%;
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.card-warp {
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  width: 100%;
  margin-top: 20px 0;
}
.card {
  width: 300px;
  height: 150px;
  margin: 20px 60px 50px;
  margin-left: 0;
  background-color: #fff;
  overflow: hidden;
  /* flex-shrink: 1; */
}
.card img {
  height:150px;
}
.card:nth-child(1){
  background:linear-gradient(to right, #f3e7e9, #0864ee);
}
.card:nth-child(2){
  background:linear-gradient(to right, #f3e7e9, #c40d1d);
}
.card img:nth-child(3){
  width: 300px;
  height:200px;
}
.url-warp {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px 0;
  text-align: center;
}
</style>