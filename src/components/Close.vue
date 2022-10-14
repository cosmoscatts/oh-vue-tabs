<script setup lang="ts">
import { computed } from 'vue'
import { useBoolean, ColorMap } from '~/composables'

interface Props {
  isActive?: boolean
  defaultColor?: string
  activeColor?: string
  inverted?: boolean
}

const {
  isActive = false,
  activeColor = ColorMap.primaryColor,
  defaultColor = ColorMap.defaultIconColor,
  inverted = false,
} = defineProps<Props>()

const { bool: isHover, setTrue, setFalse } = useBoolean()
const buttonColor = computed(() => {
  return inverted
    ? 'white'
    : isActive
      ? activeColor
      : defaultColor
})
</script>

<template>
  <div
    flex justify-center items-center
    relative w-18px h-18px
    @mouseenter="setTrue"
    @mouseleave="setFalse"
  >
    <button
      :class="
        isHover
          ? 'i-carbon-close-filled'
          : 'i-carbon-close'
      "
      :style="{
        color: buttonColor,
      }"
      absolute w-16px h-16px
    />
  </div>
</template>
