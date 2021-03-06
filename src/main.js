// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import './assets/css/global.css'
import * as echarts from 'echarts';
Vue.config.productionTip = false

Vue.use(ElementUI)
axios.defaults.baseURL = 'http://127.0.0.1:80'
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts //绑定原型对象
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
