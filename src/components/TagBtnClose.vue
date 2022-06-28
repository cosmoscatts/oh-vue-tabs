<script setup lang="ts">
import { computed } from 'vue'
import { useBoolean } from '~/composables'

const {
  isActive = false,
  defaultColor = '#9ca3af',
  activeColor = '#1890ff',
} = defineProps<{
  isActive?: boolean
  defaultColor?: string
  activeColor?: string
}>()

const { bool: isHover, setTrue, setFalse } = useBoolean()
const colorStyle = computed(() => {
  return isActive
    ? activeColor
    : defaultColor
})
</script>

<template>
  <div
    flex justify-center items-center
    relative w-18px h-18px
    :style="colorStyle"
    @mouseenter="setTrue"
    @mouseleave="setFalse"
  >
    <Transition name="fade" mode="out-in" appear>
      <button
        icon-btn absolute w-16px h-16px
        :class="isHover
          ? 'i-carbon-close-filled'
          : 'i-carbon-close'"
      />
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
