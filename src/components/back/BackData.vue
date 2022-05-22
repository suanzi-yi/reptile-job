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
      111111111111
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
    };
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
.btn-warp {
  width: 100%;
}
</style>