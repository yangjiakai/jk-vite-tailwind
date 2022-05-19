import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

// https://vitejs.dev/config/
export default defineConfig({
  // 服务器配置
  server: {
    // port: 8081,
    // open: true,
    // http: true,
    // ssr: false,
    // 设置代理
    proxy: {
      "/api": {
        target: "https://api.imooc-admin.lgdsunday.club/",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/app": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/app/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      comps: path.resolve(__dirname, "src/components"),
      styles: path.resolve(__dirname, "src/styles"),
      plugins: path.resolve(__dirname, "src/plugins"),
      views: path.resolve(__dirname, "src/views"),
      layouts: path.resolve(__dirname, "src/layouts"),
      utils: path.resolve(__dirname, "src/utils"),
      apis: path.resolve(__dirname, "src/apis"),
      dirs: path.resolve(__dirname, "src/directives"),
    },
  },
  define: {
    "process.env": {},
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon",
        }),
      ],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
});
