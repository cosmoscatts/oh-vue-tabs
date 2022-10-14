<script setup lang="ts">
import { computed } from 'vue'
import { useMixinColor, ColorMap } from '~/composables'
import type { FillColor, MixRatio } from '~/index'

interface Props {
  isDark?: boolean
  isActive?: boolean
  isHover?: boolean
  primaryColor?: string
  bgColor?: FillColor
  hoverBgColor?: FillColor
  mixColor?: FillColor
  mixRatio?: MixRatio
}

const {
  isDark = false,
  isActive = false,
  isHover = false,
  primaryColor = ColorMap.primaryColor,
  bgColor = ['#ffffff', '#18181c'],
  hoverBgColor = ['#dee1e6', '#2D2D2D'],
  mixColor = ['#ffffff', '#000000'],
  mixRatio = [0.2, 0.3],
} = defineProps<Props>()

const fill = computed(() => {
  const index = Number(isDark)
  let color = bgColor[index]
  if (isHover)
    color = hoverBgColor[index]

  if (isActive) {
    const ratio = mixRatio[index]
    color = useMixinColor(mixColor[index], primaryColor, ratio)
  }
  return color
})
</script>

<template>
  <svg w-full h-full>
    <defs>
      <symbol id="geometry-left" viewBox="0 0 214 36">
        <path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z" />
      </symbol>
      <symbol id="geometry-right" viewBox="0 0 214 36">
        <use xlink:href="#geometry-left" />
      </symbol>
      <clipPath>
        <rect width="100%" height="100%" x="0" />
      </clipPath>
    </defs>
    <svg width="52%" height="100%">
      <use xlink:href="#geometry-left" width="214" height="36" :fill="fill" />
    </svg>
    <g transform="scale(-1, 1)">
      <svg width="52%" height="100%" x="-100%" y="0">
        <use xlink:href="#geometry-right" width="214" height="36" :fill="fill" />
      </svg>
    </g>
  </svg>
</template>
