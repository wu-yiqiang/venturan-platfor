import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
import 'uno.css'
import '@/styles/index.scss'

import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/theme-chalk/src/notification.scss'
import 'element-plus/theme-chalk/el-input-number.css'

// 以下为bpmn工作流绘图工具的样式
import 'bpmn-js/dist/assets/diagram-js.css' // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'

const app = createApp(App)
import * as Icons from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(Icons)) {
  app.component(key, component)
}
app.use(router).use(createPinia())
app.mount('#app')
