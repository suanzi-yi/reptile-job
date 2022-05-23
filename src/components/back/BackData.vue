<template>
  <div class="all">
    <div class="head">
      <div class="table-warp">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="ID" width="180"> </el-table-column>
          <el-table-column prop="uuid" label="任务编号" width="250">
          </el-table-column>
          <el-table-column prop="url" label="目标url"> </el-table-column>
          <el-table-column prop="status" label="状态" width="250">
            <template slot-scope="scope">
              <el-tag type="success" disable-transitions>{{
                scope.row.status == 1 ? "进行中" : "已完成"
              }}</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 数据图表 -->
    <div class="data-table-warp">
      <el-table :data="playdata" style="width: 100%">
        <el-table-column prop="球队" label="球队" width="100">
        </el-table-column>
        <el-table-column prop="球员" label="球员" width="150">
        </el-table-column>

        <el-table-column prop="位置" label="位置" width="100">
        </el-table-column>
        <el-table-column prop="出场时间" label="出场时间" width="100">
        </el-table-column>
        <el-table-column prop="助攻" label="助攻" width="100">
        </el-table-column>
        <el-table-column prop="场次" label="场次" width="100">
        </el-table-column>
        <el-table-column prop="失误" label="失误" width="100">
        </el-table-column>
        <el-table-column prop="得分" label="得分" width="100">
        </el-table-column>
        <el-table-column prop="抢断" label="抢断" width="100">
        </el-table-column>
        <el-table-column prop="犯规" label="犯规" width="100">
        </el-table-column>
        <el-table-column prop="三分命中率" label="三分命中率" width="100">
        </el-table-column>
        <el-table-column prop="盖帽" label="盖帽" width="100">
        </el-table-column>
        <el-table-column prop="篮板" label="篮板" width="100">
        </el-table-column>
        <el-table-column prop="罚球命中率" label="罚球命中率" width="100">
        </el-table-column>
        <el-table-column prop="进攻效率" label="进攻效率" width="100">
        </el-table-column>
        <el-table-column prop="防守效率" label="防守效率" width="100">
        </el-table-column>
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
          uuid: "1653217178550",
          url: "https://china.nba.cn/",
          status: "0",
        },
      ],
      playdata: [],
    };
  },
  mounted() {
    this.$http
      .get("getalldata")
      .then((result) => {
        console.log(result);
        if(result.data.status == 1) {this.$message.success("数据拉取成功！")}
        this.playdata = result.data.data;
      })
      .catch((err) => {});
  },
};
</script>

<style scoped>
.all {
  height: 250%;
  width: 100%;
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.card {
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
}
.head {
  width: 100%;
  /* height: 50px; */
  position: sticky;
  top: -20px;
  background-color: red;
  z-index: 8;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.table-warp,
.data-table-warp {
  width: 100%;
}
.data-table-warp {
  margin-top: 20px;
}
</style>