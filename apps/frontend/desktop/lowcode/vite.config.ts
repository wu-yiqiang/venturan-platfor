import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { resolve } from 'node:path';
import { federation } from '@module-federation/vite'
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-import.d.ts',
      eslintrc: {
        enabled: true
      }
    }),
    basicSsl(),
    topLevelAwait(),
    federation({
      name: 'common-app', // 主应用名称
      remotes: {
        components_center: 'http://localhost:8980/dist/assets/remoteEntry.js'
      },
      shared: []
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json', 'scss', '.ts', '.jsx', '.tsx'],
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 8982,
    https: true,
    hmr: true
  }
})
