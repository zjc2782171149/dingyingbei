import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'normalize.css'
import './style/base.scss'
import './style/common.css'
import './style/iconfont.css'

const app = createApp(App);
app.use(ElementPlus, { size: 'small' })
app.use(store).use(router).mount('#app')

// Vue.config.productionTip = false;
// axios.defaults.baseURL = '/api';// 配置接口地址
axios.defaults.withCredentials = true;
