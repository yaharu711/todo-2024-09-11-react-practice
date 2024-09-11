import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/todo-2024-09-11-react/' : '/',
  server: {
    host: '0.0.0.0',
    port: 5173, // 必要に応じてポート番号を指定
    watch: { //ホットリロードの設定
      usePolling: true, // ファイル変更のポーリングを使用
      interval: 100 // ポーリングの間隔（ミリ秒）
    }
  }
})
