<script setup lang="ts">
import { computed } from 'vue'
import TagChrome from './TagChrome.vue'
import TagDefault from './TagDefault.vue'
import type { FillColor, MixRatio } from '~/types'

const props = defineProps<{
  mode?: 'default' | 'chrome'
  isDark?: boolean
  isActive?: boolean
  primaryColor?: string
  closable?: boolean
  borderColor?: string
  borderDarkColor?: string
  bgColor?: FillColor
  hoverBgColor?: FillColor
  mixColor?: FillColor
  mixRatio?: MixRatio
}>()

// const component = computed(() => {
//   return mode === 'default'
//     ? TagDefault
//     : TagChrome
// })
//
</script>

<template>
  <component
    :is="props.mode === 'default'
      ? TagDefault
      : TagChrome"
    v-bind="$props"
  />
</template>
