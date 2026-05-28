// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///Users/atlas/venturan-platform/node_modules/.pnpm/vite@5.4.21_@types+node@20.19.37_less@4.6.4_lightningcss@1.32.0_sass@1.98.0_terser@5.46.1/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/atlas/venturan-platform/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vite@5.4.21_@types+node@20.19.37_less@4.6.4_lightningcss@1.32._2d9ef0ccfc5b0781378207a32436520c/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///Users/atlas/venturan-platform/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.4.21_@types+node@20.19.37_less@4.6.4_lightningcss@1_31b10236569e5a83279d7ef3974f89b3/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import VueSetupExtend from "file:///Users/atlas/venturan-platform/node_modules/.pnpm/vite-plugin-vue-setup-extend@0.4.0_vite@5.4.21_@types+node@20.19.37_less@4.6.4_lightnin_583b9226ec18ab504b9e3045904a373e/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import Components from "file:///Users/atlas/venturan-platform/node_modules/.pnpm/unplugin-vue-components@0.27.5_@babel+parser@7.29.7_rollup@4.40.0_vue@3.5.34_typescript@5.4.5_/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///Users/atlas/venturan-platform/node_modules/.pnpm/unplugin-auto-import@0.17.8_@vueuse+core@10.11.1_vue@3.5.34_typescript@5.4.5___rollup@4.40.0/node_modules/unplugin-auto-import/dist/vite.js";
import { viteMockServe } from "file:///Users/atlas/venturan-platform/node_modules/.pnpm/vite-plugin-mock@2.9.8_mockjs@1.1.0_vite@5.4.21_@types+node@20.19.37_less@4.6.4_lightni_1954663179a87d342ce6abfd59e032b0/node_modules/vite-plugin-mock/dist/index.js";
import { createSvgIconsPlugin } from "file:///Users/atlas/venturan-platform/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.4.21_@types+node@20.19.37_less@4.6.4_lightningcss@1.32.0_sass@1.98.0_terser@5.46.1_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { ElementPlusResolver } from "file:///Users/atlas/venturan-platform/node_modules/.pnpm/unplugin-vue-components@0.27.5_@babel+parser@7.29.7_rollup@4.40.0_vue@3.5.34_typescript@5.4.5_/node_modules/unplugin-vue-components/dist/resolvers.js";
import Unocss from "file:///Users/atlas/venturan-platform/node_modules/.pnpm/unocss@0.59.4_postcss@8.5.15_rollup@4.40.0_vite@5.4.21_@types+node@20.19.37_less@4.6.4__bda57fc6d770f465e402a877f1d5f649/node_modules/unocss/dist/vite.mjs";
import { resolve } from "path";
var __vite_injected_original_import_meta_url = "file:///Users/atlas/venturan-platform/apps/frontend/desktop/flow/vite.config.ts";
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
    port: 8981,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXRsYXMvdmVudHVyYW4tcGxhdGZvcm0vYXBwcy9mcm9udGVuZC9kZXNrdG9wL2Zsb3dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hdGxhcy92ZW50dXJhbi1wbGF0Zm9ybS9hcHBzL2Zyb250ZW5kL2Rlc2t0b3AvZmxvdy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYXRsYXMvdmVudHVyYW4tcGxhdGZvcm0vYXBwcy9mcm9udGVuZC9kZXNrdG9wL2Zsb3cvdml0ZS5jb25maWcudHNcIjtpbXBvcnQge2ZpbGVVUkxUb1BhdGgsIFVSTH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgVnVlU2V0dXBFeHRlbmQgZnJvbSAndml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZCdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IHt2aXRlTW9ja1NlcnZlfSBmcm9tIFwidml0ZS1wbHVnaW4tbW9ja1wiO1xuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXG5pbXBvcnQge0VsZW1lbnRQbHVzUmVzb2x2ZXJ9IGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnNcIjtcbmltcG9ydCBVbm9jc3MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQge3Jlc29sdmV9IGZyb20gXCJwYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgYmFzZTogJy8nLFxuICAgIGFzc2V0c0luY2x1ZGU6IFtcbiAgICAgICAgJyoqLyoueG1sJ1xuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgICAgICAgcG9ydDogODk4MSxcbiAgICAgICAgcHJveHk6IHtcbiAgICAgICAgICAgICcvYXBpJzoge1xuICAgICAgICAgICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4NCcsXG4gICAgICAgICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksXG4gICAgICAgICAgICAgICAgc2VjdXJlOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIHZ1ZSgpLFxuICAgICAgICB2dWVKc3goKSxcbiAgICAgICAgVW5vY3NzKCksXG4gICAgICAgIFZ1ZVNldHVwRXh0ZW5kKCksXG4gICAgICAgIHZpdGVNb2NrU2VydmUoe1xuICAgICAgICAgICAgbW9ja1BhdGg6ICcuL3NyYy9tb2NrJyxcbiAgICAgICAgICAgIGxvY2FsRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHByb2RFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgaW5qZWN0Q29kZTogYCBpbXBvcnQgeyBzZXR1cFByb2RNb2NrU2VydmVyIH0gZnJvbSAnLi9tb2NrUHJvZFNlcnZlcic7IHNldHVwUHJvZE1vY2tTZXJ2ZXIoKTsgYCxcbiAgICAgICAgfSksXG4gICAgICAgIENvbXBvbmVudHMoe1xuICAgICAgICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAndHN4JywgJ21kJ10sXG4gICAgICAgICAgICBnbG9iczogWydzcmMvY29tcG9uZW50cy8qLyoudnVlJywgJ3NyYy9jb21wb25lbnRzLyovKi50c3gnXSxcbiAgICAgICAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkLywgL1xcLlt0al1zeD8kL10sXG4gICAgICAgICAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgICAgICAgICBFbGVtZW50UGx1c1Jlc29sdmVyKHtcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0U3R5bGU6ICdzYXNzJyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkdHM6ICdzcmMvdHlwaW5ncy9jb21wb25lbnRzLmQudHMnXG4gICAgICAgIH0pLFxuICAgICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgICAgIGltcG9ydHM6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInXSxcbiAgICAgICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgICAgICAgICBkdHM6ICdzcmMvdHlwaW5ncy9hdXRvLWltcG9ydHMuZC50cycsXG4gICAgICAgICAgICBlc2xpbnRyYzoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZmlsZXBhdGg6ICcuLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgLy8gc3ZnIFx1NTZGRVx1NjgwN1xuICAgICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAgICAgICBpY29uRGlyczogW3Jlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hc3NldHMvaWNvbnMnKV0sXG4gICAgICAgICAgICBzeW1ib2xJZDogJ2ljb24tW2Rpcl0tW25hbWVdJ1xuICAgICAgICB9KSxcbiAgICBdLFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL2pzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnYXNzZXRzL2pzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnYXNzZXRzL1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF0nLFxuICAgICAgICAgICAgICAgIHNhbml0aXplRmlsZU5hbWUobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IC9eW2Etel06L2kuZXhlYyhuYW1lKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcml2ZUxldHRlciA9IG1hdGNoID8gbWF0Y2hbMF0gOiAnJ1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgZHJpdmVMZXR0ZXIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS5zdWJzdHJpbmcoZHJpdmVMZXR0ZXIubGVuZ3RoKS5yZXBsYWNlKC9bXFx4MDAtXFx4MUZcXHg3Rjw+KiNcInt9fF5bXFxdYDs/OiY9KyQsXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZWLFNBQVEsZUFBZSxXQUFVO0FBRTlYLFNBQVEsb0JBQW1CO0FB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
