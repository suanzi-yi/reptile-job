<template>
  <div class="container-warp">
    <div class="container">
      <div class="form-box" ref="form_box">
        <!-- 注册 -->
        <div class="register-box hidden" ref="register_box">
          <h1>register</h1>
          <input required type="text" placeholder="账号" />
          <input required type="text" placeholder="昵称" />
          <input required type="password" placeholder="密码" />
          <input required type="password" placeholder="确认密码" />
          <button>注册</button>
        </div>
        <!-- 登录 -->
        <div class="login-box" ref="login_box">
          <h1>login</h1>
          <input type="text" placeholder="用户名" />
          <input type="password" placeholder="密码" />
          <button>登录</button>
        </div>
      </div>
      <div class="con-box left">
        <h2>欢迎来到<span>爬虫系统</span></h2>
        <p>快来提交你的<span>任务</span>吧</p>
        <!-- <img src="../images/cat/1.png" alt="" /> -->
        <p>已有账号?</p>
        <button id="login" @click="tologin">去登录</button>
      </div>
      <div class="con-box right">
        <h2>欢迎来到<span>爬虫系统</span></h2>
        <p>快来查看你的<span>任务</span>吧</p>
        <!-- <img src="../images/cat/2.png" alt="" /> -->
        <p>没有账号？</p>
        <button id="register" @click="toregister">去注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toregister() {
        this.$refs['form_box'].style.transform="translateX(80%)"
        this.$refs['login_box'].classList.add("hidden");
        this.$refs['register_box'].classList.remove("hidden");
    },
    tologin(){
        this.$refs['form_box'].style.transform="translateX(0%)"
        this.$refs['register_box'].classList.add("hidden");
        this.$refs['login_box'].classList.remove("hidden");
    }
  },
};
</script>

<style scoped>
.container-warp {
  height: 100vh;
  /* 弹性布局 水平+垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(200deg, #f3e7e9, #e3eeff);
}
.container {
  background-color: #fff;
  width: 650px;
  height: 415px;
  border-radius: 5px;
  /* 阴影 */
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  /* 相对定位 */
  position: relative;
  /* background:none; */
}
.form-box {
  /* 绝对定位 */
  position: absolute;
  top: -10%;
  left: 5%;
  background-image:url("../assets/formbox.jpg");
  background-size: cover;
  width: 320px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  /* 动画过渡 加速后减速 */
  transition: 0.5s ease-in-out;
}
.register-box,
.login-box {
  /* 弹性布局 垂直排列 */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.hidden {
  display: none;
  transition: 0.5s;
}
h1 {
  text-align: center;
  margin-bottom: 25px;
  /* 大写 */
  text-transform: uppercase;
  color: #fff;
  /* 字间距 */
  letter-spacing: 5px;
}
input {
  background-color: transparent;
  width: 70%;
  color: #fff;
  border: none;
  /* 下边框样式 */
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 10px 0;
  text-indent: 10px;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing: 2px;
}
input::placeholder {
  color: #fff;
}
input:focus {
  color: #fff;
  outline: none;
  border-bottom: 1px solid #fff;
  transition: 0.5s;
}
input:focus::placeholder {
  opacity: 0;
}
.form-box button {
  width: 70%;
  margin-top: 35px;
  background-color: #f6f6f6;
  outline: none;
  border-radius: 8px;
  padding: 13px;
  color: #a49cbb;
  letter-spacing: 2px;
  border: none;
  cursor: pointer;
}
.form-box button:hover {
  background-color: #6362ad;
  color: #f6f6f6;
  transition: background-color 0.5s ease;
}
.con-box {
  width: 50%;
  /* 弹性布局 垂直排列 居中 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 绝对定位 居中 */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.con-box.left {
  left: -2%;
}
.con-box.right {
  right: -2%;
}
.con-box h2 {
  color: #191a1b;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: 4px;
}
.con-box p {
  font-size: 12px;
  letter-spacing: 2px;
  color: #8e9aaf;
  text-align: center;
}
.con-box span {
  color: #4d36ce;
}

.con-box button {
  margin-top: 3%;
  background-color: #fff;
  color: #848085;
  border: 1px solid #6362ad;
  padding: 6px 10px;
  border-radius: 5px;
  letter-spacing: 1px;
  outline: none;
  cursor: pointer;
}
.con-box button:hover {
  background-color: #6362ad;
  color: #fff;
}
</style>