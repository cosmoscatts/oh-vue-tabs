import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno, presetWind } from 'unocss'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    Vue({
      include: [/\.vue$/],
      reactivityTransform: true,
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss({
      shortcuts: {
        'icon-btn': 'op30 hover:op100]',
      },
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons({
          scale: 1.2,
        }),
        presetWind(),
      ],
    }),

    dts({
      include: ['./src/index.ts',],
      beforeWriteFile(filePath, content) {
        return {
          filePath: filePath.replace('/dist/src/', '/dist/'),
          content,
        }
      },
    }),
  ],
})

