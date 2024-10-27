import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import './style.css'

createApp(App)
  .use(router) // ใช้ Router ในแอปพลิเคชัน
  .mount('#app');