<template>
  <div>
    <h1>应用场景</h1>
    <el-divider><i class="el-icon-s-opportunity"></i></el-divider>
    <!-- 卡组 -->
    <div class="container">
      <div class="card">
        <div class="icon-warp">
          <i class="el-icon-search"></i>
        </div>
        <h2>数据挖掘</h2>
        <div class="card-content">
          <p>挖掘多种数据，收集整理有关数据以使用</p>
        </div>
      </div>
      <div class="card">
        <div class="icon-warp">
          <i class="el-icon-data-analysis"></i>
        </div>
        <h2>数据分析</h2>
        <div class="card-content">
          <p>数据分析小白简单上手进行数据分析，对数据内在关系了然于心</p>
        </div>
      </div>
      <div class="card">
        <div class="icon-warp">
          <i class="el-icon-upload"></i>
        </div>
        <h2>数据存储</h2>
        <div class="card-content">
          <p>担心数据丢失，数据损毁，在这里一键保存，随时调用</p>
        </div>
      </div>
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
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: center;
  position: relative;
}
.card:hover{
  transform: translateY(-2px);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
h2{
  padding:15px 0 30px 0;
}
.icon-warp {
  font-size: 50px;
  color: #48c9d6;
   margin:20px 0;
}
.card-content{
  text-align: center;
  padding:0 30px;
}
</style>