import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入全局样式
import './assets/global.less'

//引入axios
import axios from 'axios'

axios.defaults.baseURL = 'http://www.liulongbin.top:3008'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
