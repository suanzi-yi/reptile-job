<template>
<!-- 外部导航栏 -->
  <div class="head-warp">
      <!-- 中间 -->
      <div class="container">
          <!-- 菜单选项 -->
          <ul>
              <li>首页</li>
              <li>贡献作者</li>
              <li>产品功能</li>
              <li>应用场景</li>
          </ul> 
          <!-- 登录选项 -->
          <div class="right-menu">
              <el-button type="primary" @click="tologin">登录|注册</el-button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "indexhead",
    methods:{
        tologin(){
            this.$router.push("/login")
        }
    }
}
</script>

<style scoped>
.head-warp {
    height:100px;
    background-color:#fff;
    position:sticky;
    top: 0px;
    z-index: 99;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5);
}
.container {
    display: flex;
    align-items: center;
    margin:0 auto;
    width: 97%;
    height:100%;
    line-height:100%;
}
.container ul{
    margin:0 auto;
    width: 60%;
    display: flex;
    justify-content: center;
}
.container ul li{
    border-radius: 7px;
    display:inline-block;
    text-align:center;
    line-height:40px;
    flex-grow: 1;
    transition:background-color .3s ease-in-out;
}
.container ul li:hover{
    color: #fff;
    background-color:#366aeb;
}
/* buttom样式 */
.el-button--primary{
    background-color: #366aeb;
}
.el-button--primary:hover{
    background-color: #366aeb;
    opacity: .8;
}
</style>