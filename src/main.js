import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/index.css'
import '@/assets/imgs/index'
import './permission'
import SvgIcon from '@/components/svgIcon'
const app = createApp(App)
app.component('svg-icon', SvgIcon)
app.use(ElementPlus).use(store).use(router).mount('#app')
