<template>
  <div class="all">
    <h1>我的任务</h1>
    <div class="table-warp">
      <el-table  :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="uuid" label="任务编号" width="180">
        </el-table-column>
         <el-table-column prop="address" label="目标url">
        </el-table-column>
        <el-table-column prop="tag" label="状态" width="100">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === '已完成' ? 'success' : 'danger'"
              disable-transitions
              >{{ scope.row.tag }}</el-tag
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
        {
          date: "2016-05-02",
          name: "王惠栋",
          address: "http://www.baidu.com",
          uuid:"10086",
          tag: "已完成",
        },
        {
          date: "2016-05-04",
          name: "王惠栋",
          address: "http://www.baidu.com",
          uuid:"10086",
          tag: "已完成",
        },
        {
          date: "2016-05-01",
          name: "王惠栋",
          address: "http://www.baidu.com",
          uuid:"10086",
          tag: "进行中",
        },
        {
          date: "2016-05-03",
          name: "王惠栋",
          address: "http://www.baidu.com",
          uuid:"10086",
          tag: "进行中",
        },
      ],
    };
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
  margin-top: 50px;
  width: 100%;
}
</style>