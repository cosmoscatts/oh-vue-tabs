<script setup lang="ts">
import { computed } from 'vue'
import Close from './Close.vue'
import { addColorAlpha, useBoolean, ColorMap } from '~/composables'

interface Props {
  isDark?: boolean
  isActive?: boolean
  closable?: boolean
  primaryColor?: string
  borderColor?: string
  borderDarkColor?: string
  inverted?: boolean
}

const {
  isDark = false,
  isActive = false,
  closable = true,
  primaryColor = ColorMap.primaryColor,
  borderColor = ColorMap.borderColor,
  borderDarkColor = ColorMap.borderDarkColor,
  inverted = false,
} = defineProps<Props>()
const emit = defineEmits(['close'])

const { bool: isHover, setTrue, setFalse } = useBoolean()

const isTabActive = computed(() => isActive || isHover.value)

const tabStyle = computed(() => {
  if (!inverted) {
    const style: Record<string, string> = {
      borderColor: isTabActive.value
        ? addColorAlpha(primaryColor, 0.3)
        : isDark
          ? borderDarkColor
          : borderColor,
    }

    if (isTabActive.value)
      style.color = primaryColor

    if (isActive)
      style.backgroundColor = addColorAlpha(primaryColor, isDark ? 0.15 : 0.1)

    return style
  }
  else {
    return {
      color: 'white',
      backgroundColor: isActive
        ? primaryColor
        : isHover.value
          ? addColorAlpha(primaryColor, 0.75)
          : addColorAlpha(primaryColor, 0.5),
    }
  }
})

function handleClose(e: MouseEvent) {
  e.stopPropagation()
  emit('close')
}
</script>

<template>
  <div
    relative h-30px 
    flex-inline justify-center items-center
    px-14px rounded-2px cursor-pointer
    :style="tabStyle"
    :class="{ 'border-1 border-solid': !inverted }"
    @mouseenter="setTrue"
    @mouseleave="setFalse"
  >
    <span>
      <slot />
    </span>
    <Close
      v-if="closable" pl-10px
      :is-active="isTabActive"
      :inverted="inverted"
      :active-color="primaryColor"
      @click="handleClose"
    />
  </div>
</template>
