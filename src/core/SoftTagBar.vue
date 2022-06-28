<script setup lang="ts">
import { computed } from 'vue'
import TagChrome from './TagChrome.vue'
import TagDefault from './TagDefault.vue'

const {
  mode = 'default',
} = defineProps<{
  mode?: 'default' | 'chrome'
}>()

const component = computed(() => {
  return mode === 'default'
    ? TagDefault
    : TagChrome
})
</script>

<template>
  <Component :is="component" />
</template>
