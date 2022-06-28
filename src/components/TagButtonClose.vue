<script setup lang="ts">
import type { TagButtonCloseProps } from '~/types'
import { EnumSoftTagBar as Enum } from '~/enum'

const {
  isActive = false,
  activeColor = Enum.primaryColor,
  defaultColor = Enum.defaultIconColor,
} = defineProps<TagButtonCloseProps>()
</script>

<template>
  <div
    flex justify-center items-center
    relative w-18px h-18px
  >
    <button
      :class="
        isActive
          ? 'i-carbon-close-filled'
          : 'i-carbon-close'
      "
      :style="{
        color: isActive
          ? activeColor
          : defaultColor,
      }"
      absolute w-16px h-16px
    />
  </div>
</template>
