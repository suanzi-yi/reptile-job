<template>
  <div>
      <!-- 标题 -->
      <h1>贡献作者</h1>
      <el-divider><i class="el-icon-s-custom"></i></el-divider>
      <!-- 浮动卡片 -->
    <div class="container">
      <div class="card">
        <div class="imgBx">
          <img src="../assets/indeximgs/p1.png" alt="" />
        </div>
        <div class="content">
          <h2>Card One</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            recusandae, voluptatibus magnam reprehenderit a numquam. Temporibus
            esse sit provident quaerat quae.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="imgBx">
          <img src="../assets/indeximgs/p2.png" alt="" />
        </div>
        <div class="content">
          <h2>Card Two</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            recusandae, voluptatibus magnam reprehenderit a numquam. Temporibus
            esse sit provident quaerat quae.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="imgBx">
          <img src="../assets/indeximgs/p3.png" alt="" />
        </div>
        <div class="content">
          <h2>Card Three</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            recusandae, voluptatibus magnam reprehenderit a numquam. Temporibus
            esse sit provident quaerat quae.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexauthor",
};
</script>

<style scoped>
h1{
    text-align: center;
    margin:15px 0px auto;
    
}
.container {
  position: relative;
  height: 500px;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  padding: 5px;
}

.container .card {
  margin-top: 100px;
  position: relative;
  max-width: 300px;
  height: 215px;
  background: #fff;
  margin: 30px 35px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
}

.container .card:hover {
  height: 420px;
}

.container .card .imgBx {
  position: relative;
  width: 260px;
  height: 260px;
  top: -60px;
  left: 20px;
  z-index: 1;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.container .card .imgBx img {
  max-width: 100%;
  border-radius: 4px;
}

.container .card .content {
  position: relative;
  margin-top: -140px;
  padding: 10px 15px;
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

.container .card:hover .content {
  visibility: visible;
  opacity: 1;
  margin-top: -40px;
  transition-delay: 0.3s;
}
</style>