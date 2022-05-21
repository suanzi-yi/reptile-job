<template>
  <div class="all">
    <div class="page-warp">
      <p>可以在此处提交爬取的参数或者url，并定义您所需要的参数以及类型</p>
    </div>
    <div class="form-warp">
      <div class="url-input">
        <input
          v-model="url"
          placeholder="Url或Api接口地址:--槽位置用{{}}标出"
          spellcheck="false"
        />
      </div>
      <div class="args">
        参数个数:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-input-number
          v-model="num"
          @change="handleChange"
          :min="0"
          :max="5"
        ></el-input-number>
        <div class="args-input" v-for="i in num" :key="i">
          <input
            type="text"
            v-model="inputargs[i - 1].start"
            :placeholder="`参数${i}开始`"
          />
          <input
            type="text"
            v-model="inputargs[i - 1].end"
            :placeholder="`参数${i}结束`"
          />
          <input
            type="text"
            v-model="inputargs[i - 1].step"
            :placeholder="`参数${i}步长`"
          />
        </div>
      </div>
      <div class="re-input">
        Re表达式:
        <input v-model="re" placeholder="Re表达式" spellcheck="false" />
      </div>
      <div class="sub-bton">
        <el-button type="primary" @click="test">测试</el-button>
        <el-button type="primary" @click="submitjob">提交任务</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      inputargs: [
        { start: "", end: "", step: "" },
        { start: "", end: "", step: "" },
        { start: "", end: "", step: "" },
        { start: "", end: "", step: "" },
        { start: "", end: "", step: "" },
      ],
      //
      num: 0,
      re: "",
    };
  },
  methods: {
    test() {
      if (this.num != 0) {
        var arg = [];
        for (let i = 0; i < this.num; i++) {
          arg.push(this.inputargs[i]);
        }
      }
      let resultargs = [];
      for (let i = 0; i < arg.length; i++) {
        resultargs.push(arg[i].start);
      }
      const submitform = {
        url: this.url,
        arg: resultargs || "",
        re: this.re,
      };
      console.log(submitform);
    },
    submitjob() {
      if (this.num != 0) {
        var arg = [];
        for (let i = 0; i < this.num; i++) {
          arg.push(this.inputargs[i]);
        }
      }
      const submitform = {
        url: this.url,
        arg: arg || [],
        re: this.re,
        uuid: Date.now(),
      };
      console.log(submitform);
      this.$http
        .post("addjob", submitform)
        .then((result) => {
          console.log("==>", result.data.status);
          if(result.data.status==1){
              this.$message.success('提交任务成功')
          }
          else{
              this.$message.error('提交任务失败')
          }
        })
        .catch((err) => {});
    },
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
.page-warp {
  text-align: center;
  /* background-color: #fff; */
  width: 80%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  font-size: 20px;
  font-weight: bold;
}
.page-warp p {
  display: block;
  margin: 0 auto;
}
.form-warp {
  width: 100%;
  height: 80%;
  font-size: 20px;
  color: #606266;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
}
.url-input input {
  outline: none;
  width: 100%;
  font-size: 20px;
  background: none;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 30px;
}
.url-input input:focus {
  border: none;
  border-bottom: 1px solid #3667ee;
}
.args {
  text-align: left;
  font-size: 20px;
  margin-bottom: 50px;
}
.args-input {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}
.re-input {
  margin-bottom: 50px;
}
input {
  outline: none;
  width: 30%;
  font-size: 20px;
  background: none;
  border: none;
  border-bottom: 1px solid #e0e0e0;
}
input:focus {
  border: none;
  border-bottom: 1px solid #3667ee;
}
.sub-bton {
  display: flex;
  justify-content: flex-end;
  position: relative;
  right: 15%;
}
</style>