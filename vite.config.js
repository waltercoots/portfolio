import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// Editing an application page's JSON would normally trigger a full reload
// (nothing in its import chain accepts HMR), replaying the modal's enter
// animation. Instead, push the new content to the open page and skip the reload.
const applicationHotUpdate = () => ({
  name: 'application-hot-update',
  async hotUpdate({ file, read }) {
    if (this.environment.name !== 'client') return
    const match = file.match(/\/src\/applications\/([^/]+)\.json$/)
    if (!match || match[1] === 'images') return
    try {
      const data = JSON.parse(await read())
      this.environment.hot.send('application:update', { slug: match[1], data })
    } catch (error) {
      this.environment.logger.error(`Invalid JSON in ${match[1]}.json: ${error.message}`)
    }
    return []
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), applicationHotUpdate(), process.env.VUE_DEVTOOLS === '1' && vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/styles/variables" as *;
          @use "@/assets/styles/breakpoints" as *;
          @use "@/assets/styles/mixins" as *;
        `,
      },
    },
  },
})
