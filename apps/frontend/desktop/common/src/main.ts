import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css'
import router from '@/router/index'
import microApp from '@micro-zoe/micro-app'
import FileViewer from '@flyfish-group/file-viewer3'

const app = createApp(App)
microApp.start()
app.use(router).use(ArcoVue).use(FileViewer)
app.mount('#app')