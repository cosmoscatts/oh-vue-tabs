<script setup lang="ts">
import { computed, unref } from 'vue'
import { addColorAlpha, useBoolean } from '~/composables'
import type { TagDefaultProps } from '~/types'
import { EnumSoftTagBar as Enum } from '~/enum'
import TagButtonClose from '~/components/TagButtonClose.vue'

const {
  isDark = false,
  isActive = false,
  primaryColor = Enum.primaryColor,
  borderColor = Enum.borderColor,
  borderDarkColor = Enum.borderDarkColor,
  closable = true,
} = defineProps<TagDefaultProps>()
const emit = defineEmits(['close'])

const { bool: isHover, setTrue, setFalse } = useBoolean()
const isTagActive = computed(() => isActive || unref(isHover))
const tagStyle = computed(() => {
  const _borderColor = isDark
    ? borderDarkColor
    : borderColor
  if (!unref(isTagActive)) {
    return {
      borderColor: _borderColor,
    }
  }

  const primaryBorderColor = addColorAlpha(primaryColor, 0.3)
  const style: Record<string, string> = {
    color: primaryColor,
    borderColor: primaryBorderColor,
  }
  if (isActive)
    style.backgroundColor = addColorAlpha(primaryColor, isDark ? 0.15 : 0.1)

  return style
})
function handleClose(e: MouseEvent) {
  e.stopPropagation()
  emit('close')
}
</script>

<template>
  <div
    relative flex-inline justify-center items-center
    h-30px px-14px rounded-2px cursor-pointer border="1 solid"
    :style="tagStyle"
    @mouseenter="setTrue"
    @mouseleave="setFalse"
  >
    <span text-nowrap>
      <slot />
    </span>
    <TagButtonClose
      v-if="closable" pl-10px
      :is-active="isTagActive"
      :active-color="primaryColor"
      @click="handleClose"
    />
  </div>
</template>
