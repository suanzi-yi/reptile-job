<template>
  <div class="all">
    <el-collapse v-model="activeNames" @change="handleChange" class="elitem">
      <el-collapse-item :title="'-->uuid:'+uuid" name="1" class="elitem">
        <div class="data-warp">
          <el-table :data="tableData" class="table-warp">
            <el-table-column prop="id" label="ID" width="180">
            </el-table-column>
            <el-table-column prop="name" label="官网名称" width="180">
            </el-table-column>
            <el-table-column prop="address" label="url地址"> </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uuid: "10086",
      activeNames: ["1"],
      tableData: [
        {
          id: "1",
          name: "NBA中文网",
          address: "https://nbachina.qq.com/",
        },
        {
          id: "2",
          name: "虎扑体育网",
          address: "https://www.hupu.com/",
        },
        {
          id: "3",
          name: "中国足球协会",
          address: "https://www.thecfa.cn/",
        },
        {
          id: "4",
          name: "中国乒乓球协会",
          address: "https://www.ctta.cn/",
        },
         {
          id: "1",
          name: "NBA中文网",
          address: "https://nbachina.qq.com/",
        },
        {
          id: "2",
          name: "虎扑体育网",
          address: "https://www.hupu.com/",
        },
        {
          id: "3",
          name: "中国足球协会",
          address: "https://www.thecfa.cn/",
        },
        {
          id: "4",
          name: "中国乒乓球协会",
          address: "https://www.ctta.cn/",
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
}
.data-warp {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px 0;
  text-align: center;
  padding: 0 15px;
}
.elitem{
   position: relative;
}
.table-warp{
    height: 300px;
    overflow: auto;
}
</style>