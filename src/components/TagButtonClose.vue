<script setup lang="ts">
import { computed } from 'vue'
import type { TagButtonCloseProps } from '~/types'

const {
  isActive = false,
  activeColor = '',
  defaultColor = '',
} = defineProps<TagButtonCloseProps>()
</script>

<template>
  <div flex justify-center items-center>
    <button />
  </div>
</template>
