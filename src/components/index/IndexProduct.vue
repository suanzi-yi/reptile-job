<template>
  <div>
    <h1>产品功能</h1>
    <el-divider><i class="el-icon-s-data"></i></el-divider>
    <!-- 卡组 -->
    <div class="container">
      <div class="card">
        <div class="icon-warp">
          <i class="el-icon-loading"></i>
        </div>
        <h1>数据挖掘</h1>
        <ul>
          <li>多种数据源</li>
          <li>多种挖掘方式</li>
        </ul>
        <el-button @click="tologin">立即体验</el-button>
      </div>
      <div class="card">
        <div class="icon-warp">
          <i class="el-icon-coin"></i>
        </div>
        <h1>存储</h1>
        <ul>
          <li>EXCLE,CSV,TXT</li>
          <li>数据库存储:MYSQL</li>
        </ul>
        <el-button @click="tologin">立即体验</el-button>
      </div>
      <div class="card">
        <div class="icon-warp">
          <i class="el-icon-data-line"></i>
        </div>
        <h1>分析</h1>
        <ul>
          <li>多种分析手段</li>
          <li>归回,聚合</li>
        </ul>
        <el-button @click="tologin">立即体验</el-button>
      </div>
      <div class="card">
        <div class="icon-warp">
          <i class="el-icon-pie-chart"></i>
        </div>
        <h1>数据可视化</h1>
        <ul>
          <li>折线图，柱状图，环比图</li>
          <li>简洁明了的数据展示</li>
        </ul>
        <el-button @click="tologin">立即体验</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
        tologin(){
            this.$router.push("/login")
        }
    }
};
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
  color: #000;
  margin: 0 20px;
  box-shadow: 0px 0px 19px 1px rgba(123, 123, 123, 0.4);
  border-radius: 5px;
  border: solid 1px #48c9d6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
.card:hover {
  color: #fff;
  background-color: #366aeb;
}

.icon-warp {
  font-size: 50px;
  color: #366aeb;
   margin:20px 0;
}
.card:hover .icon-warp{
  color: #fff;
}
.card ul {
  margin: 20px auto;
}
.card ul li{
  margin: 10px 0;
  list-style:square;
}
.el-button{
  color: #48c9d6;
  border: solid 1px #48c9d6;
  position: absolute;
  bottom:50px;
}
.card:hover .el-button{
  color: #366aeb;
}
</style>