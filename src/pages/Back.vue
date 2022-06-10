<template>
  <!-- 外层容器 -->
  <el-container class="back-container">
    <!-- 左侧导航 -->
    <el-aside class="back-aside" :width="isCollapse ? '64px' : '200px'">
      <!-- 侧边栏菜单区域 -->
      <el-menu
        router
        :collapse="isCollapse"
        :collapse-transition="false"
        text-color="#fff"
        background-color="rgb(48, 65, 86)"
        active-text-color="rgb(64, 158, 255)"
        :default-active="'/back/index'"
      >
        <!-- 一级菜单 -->
        <el-menu-item index="/back/index" @click="savePath(0)">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>

        <el-submenu index='1'>
          <!-- 一级菜单的模板区域 -->
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span>爬虫任务</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item index="/back/commit" @click="savePath(1)">
            <template slot="title">
              <i class="el-icon-upload"></i>
              <span>提交任务</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/back/view" @click="savePath(2)">
            <template slot="title">
              <i class="el-icon-s-claim"></i>
              <span>查看任务</span>
            </template>
          </el-menu-item>
        </el-submenu>

        <!-- 一级菜单 -->
        <el-menu-item index="/back/data" @click="savePath(3)">
          <i class="el-icon-coin"></i>
          <span slot="title">数据</span>
        </el-menu-item>
        <!-- 一级菜单 -->
        <el-menu-item index="/back/chart" @click="savePath(4)">
          <i class="el-icon-data-line"></i>
          <span slot="title">数据可视化</span>
        </el-menu-item>
        <el-submenu index='2'>
          <!-- 一级菜单的模板区域 -->
          <template slot="title">
            <i class="el-icon-cpu"></i>
            <span>深度学习</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item :index="'/back/nn-image'" @click="savePath(5)">
            <template slot="title">
              <i class="el-icon-picture"></i>
              <span>图片识别</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/back/nn-video" @click="savePath(6)">
            <template slot="title">
              <i class="el-icon-video-camera"></i>
              <span>视频识别</span>
            </template>
          </el-menu-item>
        </el-submenu>
        
      </el-menu>
    </el-aside>
    <!-- 右边 -->
    <el-container>
      <!-- 顶部 -->
      <el-header class="back-head">
        <!-- 折叠 -->
        <div class="left-button" @click="isCollapse = !isCollapse">
          <i :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
        </div>
        <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="item in currentPath" :key="item">{{
            item
          }}</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 头像区域 -->
        <!-- 右侧菜单 -->
        <div class="right-button" v-show="$route.path == '/back/index'">
          <!-- 下拉菜单 -->
          <el-dropdown  @command="handleCommand">
            <span class="el-dropdown-link">
              功能菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>功能1</el-dropdown-item>
              <el-dropdown-item>功能2</el-dropdown-item>
              <el-dropdown-item>功能3</el-dropdown-item>
              <el-dropdown-item disabled>修改密码</el-dropdown-item>
              <el-dropdown-item divided command="logout"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <!-- 主体区域容器 -->
      <el-main class="back-main">
        <!-- 路由占位符 -->
      <keep-alive include="nn-image">
        <router-view></router-view>
      </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      activePath: "",
      allPaths: [
        ["首页"],
        ["爬虫任务", "提交任务"],
        ["爬虫任务", "查看任务"],
        ["数据"],
        ["数据可视化"],
        ["深度学习", "图片识别"],
        ["深度学习", "视频识别"],
      ],
      currentPath: ["首页"],
    };
  },
  methods: {
    savePath(n) {
      console.log(n);
      this.currentPath = this.allPaths[n];
    },
    handleCommand(command) {
      console.log(command);
      if (command == "logout") {
        this.$router.push("/");
        this.$message.success("退出登录成功");
      }
    },
  },
};
</script>

<style scoped>
.back-container {
  height: 100%;
}
.back-aside {
  background-color: rgb(48, 65, 86);
  transition: width 0.3s ease-in-out;
}

.back-head {
  display: flex;
  height: 200px;
  background-color: #fff;
  align-items: center;
  padding-left: 5px;
  position: relative;
  flex-wrap: nowrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}
.left-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
}
.left-button:hover {
  background-color: rgba(0, 0, 0, 0.025);
}
.left-button i {
  display: block;
}
.right-button {
  position: absolute;
  right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.back-main {
  background-color: #f0f2f5;
}
/* 菜单 */
.back-aside .el-menu {
  border-right: none;
}
</style>