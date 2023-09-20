import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  presetWind,
} from 'unocss'

export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, `.env.${configEnv.mode}`)
  const isNetlify = viteEnv.VITE_IS_NETLIFY === '1'
  return {
    base: './',
    resolve: {
      alias: {
        '~/': `${resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      Vue({
        reactivityTransform: true,
      }),
      dts({
        include: ['./src/index.ts', './src/components/TabButton.vue', './src/components/TabChrome.vue'],
        beforeWriteFile(filePath, content) {
          return {
            filePath: filePath.replace('/dist/src/', '/dist/'),
            content,
          }
        },
      }),
      Unocss({
        presets: [
          presetAttributify(),
          presetUno(),
          presetIcons({
            scale: 1.2,
          }),
          presetWind(),
        ],
        theme: {
          fontFamily: {
            self: 'CMU Sans Serif, HKST',
          },
          colors: {
            primary: '#377BB5',
          },
        },
      }),
    ],
    build: isNetlify
      ? { brotliSize: false }
      : {
          lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'OhVueTabs',
            fileName: 'index',
          },
          rollupOptions: {
            external: ['vue'],
            output: {
              globals: {
                vue: 'Vue',
              },
            },
          },
        },
  }
})
