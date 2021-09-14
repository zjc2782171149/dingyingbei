import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import Element from 'element-ui'
import 'normalize.css'
import './style/base.scss'
import './style/common.css'
import './style/iconfont.css'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'

const app = createApp(App);
app.use(store).use(router).mount('#app')

// Vue.config.productionTip = false;
// axios.defaults.baseURL = '/api';// 配置接口地址
axios.defaults.withCredentials = true;
