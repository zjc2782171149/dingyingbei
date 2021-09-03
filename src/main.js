import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import 'normalize.css'
import './style/base.scss'
import './style/common.css'
import './style/iconfont.css'

createApp(App).use(store).use(router).mount('#app')
