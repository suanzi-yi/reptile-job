<template>
  <div class="container">
    <h1>人物位置视频检测与标注</h1>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="http://127.0.0.1:80/nn/video"
      :limit="1"
      :on-exceed="handleExceed"
      :on-change="handleChange"
      :on-success="handleSuccess"
      accept=".mp4" 
      :auto-upload="false"
      :data="{ name,model }"
      list-type="picture"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button
        style="margin-left: 10px"
        size="small"
        type="success"
        @click="submitUpload"
        >视频检测</el-button
      >
      <el-button
        style="margin-left: 10px"
        size="small"
        type="danger"
        @click="clearImage"
        >清空列表</el-button
      >
      <div class="model-select"> 
        nn模型：
        <el-radio v-model="model" label="offical">官方模型(yolov4)</el-radio>
        <el-radio v-model="model" label="self">自定义模型</el-radio>
      </div>
      <div slot="tip" class="el-upload__tip">只能上传mp4文件</div>
    </el-upload>
    <div v-if="getdata" class="result">
      <h1>原始视频:</h1>
      <video :src="'http://127.0.0.1'+path" controls></video>
      <h1>
        检测结果视频:&nbsp;&nbsp;&nbsp;<em style="color: blue"
          >检测耗时：{{ time + "s" }}</em
        >
      </h1>
      <video :src="'http://127.0.0.1'+nn_path" controls></video>
    </div>
  </div>
</template>

<script>
export default {
  name:'nn-image',
  data() {
    return {
      getdata: false,
      name: "",
      path: "", //原始数据
      nn_path: "", //检验后的数据
      time: "",
      model: "offical",
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleSuccess(response, file) {
      console.log(response);
      this.getdata = true;
      this.path = response.path;
      this.nn_path = response.nn_path;
      this.time = response.time;
    },
    handleChange(file) {
      this.name = file.name;
    },
    handleExceed() {
      this.$message.warning("最多只能上传一个视频");
    },
    clearImage() {
      this.$refs.upload.clearFiles();
      this.getdata = false;
      this.model='offical'
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #fff;
  padding-top: 15px;
  padding-left: 20px;
  padding-bottom: 15px;
}
.container > h1 {
  display: block;
  /* text-align: center; */
  margin-bottom: 30px;
}
.model-select{
  margin-top:5px;
  margin-bottom: 5px;
}
.result {
  margin-top: 50px;
}
.result > h1 {
  margin-top: 10px;
  margin-bottom: 20px;
}
.result video {
  width: 100%;
}
</style>