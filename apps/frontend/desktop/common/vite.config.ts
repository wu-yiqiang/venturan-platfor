import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { federation } from '@module-federation/vite'
import topLevelAwait from 'vite-plugin-top-level-await'

const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}
export default defineConfig({
  resolve: {
    alias: {
      '@': pathResolve('src/')
    }
  },
  plugins: [
    vue(),
    topLevelAwait(),
    federation({
      name: 'components-center', // 模块名称
      filename: 'remoteEntry.js', // 打包后主组件名
      exposes: {
        './MButton': './src/components/MButton.vue'
      },
      shared: [] // 共享第三方库
    })
  ],
  server: {
    host: '0.0.0.0',
    hmr: true,
    port: 8980,
    cors: true,
    strictPort: true,
    proxy: {
      '/prod-api': {
        target: `http://192.168.1.222:8000/`,
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/prod-api/, '')
      }
    }
  }
})