import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import Unocss from 'unocss/vite'
import { 
  presetAttributify, 
  presetIcons, 
  presetUno, 
  presetWind 
} from 'unocss'


export default defineConfig({
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
      mode: 'dist-chunk',
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

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'OhVueTabs',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})

