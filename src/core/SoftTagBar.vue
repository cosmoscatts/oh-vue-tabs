<script setup lang="ts">
import { computed } from 'vue'
import TagChrome from './TagChrome.vue'
import TagDefault from './TagDefault.vue'
import type { SoftTagBarProps } from '~/types'

const {
  mode = 'default',
  ...restProps
} = defineProps<SoftTagBarProps>()

const component = computed(() => {
  return mode === 'default'
    ? TagDefault
    : TagChrome
})
</script>

<template>
  <Component :is="component" v-bind="{ ...restProps }" />
</template>
