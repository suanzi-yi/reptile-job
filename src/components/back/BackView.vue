<template>
  <div class="all">
    <h1>我的任务</h1>
    <div class="table-warp">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180">
        </el-table-column>
        <el-table-column prop="username" label="用户名" width="250">
        </el-table-column>
        <el-table-column prop="uuid" label="任务编号" width="250">
        </el-table-column>
        <el-table-column prop="url" label="目标url"> </el-table-column>
        <el-table-column prop="status" label="状态" width="250">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.status == 0 ? 'success' : 'danger'"
              disable-transitions
              >{{ scope.row.status==1?'进行中':'已完成' }}</el-tag
            >
          </template>
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
      ],
    };
  },
  mounted() {
    this.$http
      .get("getjob")
      .then((result) => {
        console.log("==>", result.data.data);
        this.tableData=eval(result.data.data);
        this.$message.success('刷新任务列表成功')
      })
      .catch((err) => {});
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
.table-warp {
  margin-top: 20px;
  width: 100%;
}
</style>