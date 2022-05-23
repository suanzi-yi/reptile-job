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
      <div class="btn-warp">
        <!-- `checked` 为 true 或 false -->
        <el-checkbox v-model="chart1" class="btn">个人能力</el-checkbox>
        <el-checkbox v-model="chart2" class="btn">位置能力图</el-checkbox>
        <el-checkbox v-model="chart3" class="btn">top5能力堆叠图</el-checkbox>
      </div>
    </div>

    <PersonalAbility v-show="chart1" />
    <AbilityComparison v-show="chart2" />
    <StackedArea v-show="chart3" />
  </div>
</template>

<script>
import AbilityComparison from "../charts/AbilityComparison.vue";
import PersonalAbility from "../charts/PersonalAbility.vue";
import StackedArea from "../charts/StackedArea.vue";
export default {
  components: { AbilityComparison ,PersonalAbility,StackedArea},
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
      chart0: true,
      chart1: true,
      chart2: true,
      chart3: true,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.all {
  /* height: 250%; */
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
.btn-warp {
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
}
.btn-warp .btn {
  width: 25%;
  display: block;
  /* text-align:center; */
  padding-left: 20px;
}
</style>