<template>
  <div class="block">
    <el-carousel height="600px" :interval="5000">

      <el-carousel-item>
        <div class="container">
          <!-- left -->
          <div class="left">
            <h1>数据挖掘从现在开始</h1>
            <p>从多种数据源挖取数据，来源广泛</p>
            <el-button type="primary" @click="tologin">立即体验</el-button>
          </div>
          <!-- right -->
          <div>
            <img src="../assets/zouma/zouma1.png" alt="">
          </div>
        </div>
      </el-carousel-item>

      <el-carousel-item>
        <div class="container">
          <!-- left -->
          <div class="left">
            <h1>数据分析与可视化</h1>
            <p>多种图表，展现不同维度</p>
            <el-button type="primary" @click="tologin">立即体验</el-button>
          </div>
          <!-- right -->
          <div>
            <img src="../assets/zouma/zouma2.png" alt="">
          </div>
        </div>
      </el-carousel-item>

      <el-carousel-item>
       <div class="container">
          <!-- left -->
          <div class="left">
            <h1>数据存储，多种格式，随时保存</h1>
            <p>多种数据存储解决方案，满足不同需求</p>
            <el-button type="primary" @click="tologin">立即体验</el-button>
          </div>
          <!-- right -->
          <div>
            <img src="../assets/zouma/zouma1.png" alt="">
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    name: "indexcarousel",
    methods:{
      tologin(){
        this.$router.push('/login')
      }
    }

};
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  display:flex;
  justify-content:space-around;
  align-items:center;
  background: linear-gradient(to right, #f3e7e9, #0864ee);
}
.container img{
  max-height:500px;
}
.left{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
}
.left h1,p,button{
  margin-top:70px;
}
</style>