<script setup lang="ts">
import { EnumSoftTagBar as Enum } from '~/enum'
import { useBoolean } from '~/composables'

interface Props {
  isActive?: boolean
  defaultColor?: string
  activeColor?: string
}

const {
  isActive = false,
  activeColor = Enum.primaryColor,
  defaultColor = Enum.defaultIconColor,
} = defineProps<Props>()

const { bool: isHover, setTrue, setFalse } = useBoolean()
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
        color: isActive
          ? activeColor
          : defaultColor,
      }"
      absolute w-16px h-16px
    />
  </div>
</template>
