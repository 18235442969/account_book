import { createApp } from 'vue'
import router from './router/index'
import { store, key } from './store/index';
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(router)

app.use(store, key)

app.use(Antd)

app.mount('#app')