<script setup lang="ts">
import { useBoolean } from '~/composables'
import TagButtonClose from '~/components/TagButtonClose.vue'
import TagChromeShape from '~/components/TagChromeShape.vue'
import type { FillColor, MixRatio } from '~/types'

interface Props {
  isDark?: boolean
  isActive?: boolean
  primaryColor?: string
  closable?: boolean
  bgColor?: FillColor
  hoverBgColor?: FillColor
  mixColor?: FillColor
  mixRatio?: MixRatio
  isLast?: boolean
}

const {
  isDark = false,
  isActive = false,
  primaryColor = '#1890ff',
  closable = true,
  bgColor = ['#ffffff', '#18181c'],
  hoverBgColor = ['#dee1e6', '#3f3c37'],
  mixColor = ['#ffffff', '#000'],
  mixRatio = [0.13, 0.35],
  isLast = false,
} = defineProps<Props>()
const emit = defineEmits(['close'])

const { bool: isHover, setTrue, setFalse } = useBoolean()
function handleClose(e: MouseEvent) {
  e.stopPropagation()
  emit('close')
}
</script>

<template>
  <div

    relative flex-inline items-center h-34px px-24px m="r-[-18px]" cursor-pointer
    :class="{ 'z-10': isActive, 'z-9': isHover }"
    @mouseenter="setTrue"
    @mouseleave="setFalse"
  >
    <div absolute left-0 bottom-0 h-full w-full of-hidden>
      <TagChromeShape
        :is-dark="isDark"
        :is-active="isActive"
        :is-hover="isHover"
        :primary-color="primaryColor"
        :bg-color="bgColor"
        :hover-bg-color="hoverBgColor"
        :mix-color="mixColor"
        :mix-ratio="mixRatio"
      />
    </div>
    <span relative z-2 whitespace-nowrap>
      <slot />
    </span>
    <div v-if="closable" pl-18px>
      <TagButtonClose :is-active="isActive" :active-color="primaryColor" @click="handleClose" />
    </div>
    <div
      absolute right="[-2px]" z-2 w-20px scale-x-5 h-16px bg="[#1f2225]" op-100 transition="opacity 0.3s ease-in-out"
      :class="{
        '!op-0': isHover || isActive || isLast,
        '!bg-[rgba(255,255,255,0.9)]': isDark,
      }"
    />
  </div>
</template>
