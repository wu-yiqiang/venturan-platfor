/// <reference types="vite/client" />

// 同时保留 Vue 的声明
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
