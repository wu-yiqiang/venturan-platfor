// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/pro/venturan-platfor/node_modules/.pnpm/vite@5.4.21_@types+node@20.19.37_sass@1.87.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/pro/venturan-platfor/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vi_05d05c179f3810af942d61e539331de6/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/pro/venturan-platfor/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1._9a8192e335342d21bceca4c355fbb011/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import VueSetupExtend from "file:///D:/pro/venturan-platfor/node_modules/.pnpm/vite-plugin-vue-setup-exten_93140442c4da00f052077418f3951d56/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import Components from "file:///D:/pro/venturan-platfor/node_modules/.pnpm/unplugin-vue-components@0.2_5857fdf9b77f5efa7207d5930e8813de/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///D:/pro/venturan-platfor/node_modules/.pnpm/unplugin-auto-import@0.17.8_967e0818d9ae258c6585e94ae5cad743/node_modules/unplugin-auto-import/dist/vite.js";
import { viteMockServe } from "file:///D:/pro/venturan-platfor/node_modules/.pnpm/vite-plugin-mock@2.9.8_mock_364d723b39a78761ffc7f4f26883e24f/node_modules/vite-plugin-mock/dist/index.js";
import { createSvgIconsPlugin } from "file:///D:/pro/venturan-platfor/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_46b97e01b7140a369b4f1dc29a4fdad0/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { ElementPlusResolver } from "file:///D:/pro/venturan-platfor/node_modules/.pnpm/unplugin-vue-components@0.2_5857fdf9b77f5efa7207d5930e8813de/node_modules/unplugin-vue-components/dist/resolvers.js";
import Unocss from "file:///D:/pro/venturan-platfor/node_modules/.pnpm/unocss@0.59.4_postcss@8.5.8_48c2f43af058fad8c9511b2c58c05dbf/node_modules/unocss/dist/vite.mjs";
import { resolve } from "path";
var __vite_injected_original_import_meta_url = "file:///D:/pro/venturan-platfor/apps/frontend/flow/vite.config.ts";
var vite_config_default = defineConfig({
  base: "/",
  assetsInclude: [
    "**/*.xml"
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    host: "0.0.0.0",
    port: 3200,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8084",
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
    VueSetupExtend(),
    viteMockServe({
      mockPath: "./src/mock",
      localEnabled: true,
      prodEnabled: true,
      injectCode: ` import { setupProdMockServer } from './mockProdServer'; setupProdMockServer(); `
    }),
    Components({
      extensions: ["vue", "tsx", "md"],
      globs: ["src/components/*/*.vue", "src/components/*/*.tsx"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.[tj]sx?$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass"
        })
      ],
      dts: "src/typings/components.d.ts"
    }),
    AutoImport({
      imports: ["vue", "vue-router"],
      resolvers: [ElementPlusResolver()],
      dts: "src/typings/auto-imports.d.ts",
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json"
      }
    }),
    // svg 图标
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]"
    })
  ],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        sanitizeFileName(name) {
          const match = /^[a-z]:/i.exec(name);
          const driveLetter = match ? match[0] : "";
          return driveLetter + name.substring(driveLetter.length).replace(/[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g, "");
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9cXFxcdmVudHVyYW4tcGxhdGZvclxcXFxhcHBzXFxcXGZyb250ZW5kXFxcXGZsb3dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb1xcXFx2ZW50dXJhbi1wbGF0Zm9yXFxcXGFwcHNcXFxcZnJvbnRlbmRcXFxcZmxvd1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvL3ZlbnR1cmFuLXBsYXRmb3IvYXBwcy9mcm9udGVuZC9mbG93L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtmaWxlVVJMVG9QYXRoLCBVUkx9IGZyb20gJ25vZGU6dXJsJ1xuXG5pbXBvcnQge2RlZmluZUNvbmZpZ30gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuaW1wb3J0IFZ1ZVNldHVwRXh0ZW5kIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1zZXR1cC1leHRlbmQnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCB7dml0ZU1vY2tTZXJ2ZX0gZnJvbSBcInZpdGUtcGx1Z2luLW1vY2tcIjtcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xuaW1wb3J0IHtFbGVtZW50UGx1c1Jlc29sdmVyfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XG5pbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IHtyZXNvbHZlfSBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIGJhc2U6ICcvJyxcbiAgICBhc3NldHNJbmNsdWRlOiBbXG4gICAgICAgICcqKi8qLnhtbCdcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgICBob3N0OiAnMC4wLjAuMCcsXG4gICAgICAgIHBvcnQ6IDMyMDAsXG4gICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgIHByb3h5OiB7XG4gICAgICAgICAgICAnL2FwaSc6IHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjgwODQnLFxuICAgICAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3czogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpLFxuICAgICAgICAgICAgICAgIHNlY3VyZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgICB2dWUoKSxcbiAgICAgICAgdnVlSnN4KCksXG4gICAgICAgIFVub2NzcygpLFxuICAgICAgICBWdWVTZXR1cEV4dGVuZCgpLFxuICAgICAgICB2aXRlTW9ja1NlcnZlKHtcbiAgICAgICAgICAgIG1vY2tQYXRoOiAnLi9zcmMvbW9jaycsXG4gICAgICAgICAgICBsb2NhbEVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBwcm9kRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGluamVjdENvZGU6IGAgaW1wb3J0IHsgc2V0dXBQcm9kTW9ja1NlcnZlciB9IGZyb20gJy4vbW9ja1Byb2RTZXJ2ZXInOyBzZXR1cFByb2RNb2NrU2VydmVyKCk7IGAsXG4gICAgICAgIH0pLFxuICAgICAgICBDb21wb25lbnRzKHtcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ3RzeCcsICdtZCddLFxuICAgICAgICAgICAgZ2xvYnM6IFsnc3JjL2NvbXBvbmVudHMvKi8qLnZ1ZScsICdzcmMvY29tcG9uZW50cy8qLyoudHN4J10sXG4gICAgICAgICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC8sIC9cXC5bdGpdc3g/JC9dLFxuICAgICAgICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgICAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcih7XG4gICAgICAgICAgICAgICAgICAgIGltcG9ydFN0eWxlOiAnc2FzcycsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZHRzOiAnc3JjL3R5cGluZ3MvY29tcG9uZW50cy5kLnRzJ1xuICAgICAgICB9KSxcbiAgICAgICAgQXV0b0ltcG9ydCh7XG4gICAgICAgICAgICBpbXBvcnRzOiBbJ3Z1ZScsICd2dWUtcm91dGVyJ10sXG4gICAgICAgICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgICAgICAgICAgZHRzOiAnc3JjL3R5cGluZ3MvYXV0by1pbXBvcnRzLmQudHMnLFxuICAgICAgICAgICAgZXNsaW50cmM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZpbGVwYXRoOiAnLi8uZXNsaW50cmMtYXV0by1pbXBvcnQuanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIC8vIHN2ZyBcdTU2RkVcdTY4MDdcbiAgICAgICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgICAgICAgICAgaWNvbkRpcnM6IFtyZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zJyldLFxuICAgICAgICAgICAgc3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXSdcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBidWlsZDoge1xuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ2Fzc2V0cy9bZXh0XS9bbmFtZV0tW2hhc2hdLltleHRdJyxcbiAgICAgICAgICAgICAgICBzYW5pdGl6ZUZpbGVOYW1lKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSAvXlthLXpdOi9pLmV4ZWMobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJpdmVMZXR0ZXIgPSBtYXRjaCA/IG1hdGNoWzBdIDogJydcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyaXZlTGV0dGVyICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUuc3Vic3RyaW5nKGRyaXZlTGV0dGVyLmxlbmd0aCkucmVwbGFjZSgvW1xceDAwLVxceDFGXFx4N0Y8PiojXCJ7fXxeW1xcXWA7PzomPSskLF0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VCxTQUFRLGVBQWUsV0FBVTtBQUU3VixTQUFR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
