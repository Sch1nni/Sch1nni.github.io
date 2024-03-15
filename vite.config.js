import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        define: {
            'process.env': {
                BACKEND_BASE_URL: env.BACKEND_BASE_URL,
                TEST_TEST: env.TEST_TEST,
            },
        },
        plugins: [
            vue(),
            AutoImport({
                imports: ['vue', { 'naive-ui': [] }],
            }),
            Components({
                resolvers: [NaiveUiResolver()],
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        server: {
            port: 3000,
        },
    }
})
