<script setup lang="ts">
import { ref, unref } from 'vue'
import TagDefault from '~/components/TagDefault.vue'
import TagChrome from '~/components/TagChrome.vue'

const dark = ref(false)

function handleDarkMode() {
  dark.value = !unref(dark)
}
</script>

<template>
  <div class="h-full p-24px text-14px bg-#f6f9f8" :class="{ '!bg-#101014 text-light': dark }">
    <div>
      <span class="pr-24px text-24px font-bold">暗黑模式</span>
      <input type="checkbox" :checked="dark" @change="handleDarkMode">
    </div>
    <h3 class="pb-24px text-24px font-bold">
      ButtonTab
    </h3>
    <div class="tab-shadow pl-16px py-8px bg-white" :class="{ '!bg-dark text-white': dark }">
      <TagDefault :is-dark="dark">
        default
      </TagDefault>
      <TagDefault :is-dark="dark" :is-active="true" class="ml-12px">
        active
      </TagDefault>
      <TagDefault :is-dark="dark" class="ml-12px">
        no-close
      </TagDefault>
    </div>
    <div class="tab-shadow px-8px py-8px mt-12px bg-white" :class="{ '!bg-dark text-white': dark }">
      <TagChrome mode="default" :is-dark="dark" primary-color="#5856D6">
        default
      </TagChrome>
      <TagChrome :is-dark="dark" primary-color="#5856D6">
        active
      </TagChrome>
      <TagChrome :is-dark="dark" primary-color="#5856D6" :closable="false">
        no-close
      </TagChrome>
      <TagChrome :is-dark="dark" primary-color="#5856D6" :is-active="true">
        active
      </TagChrome>
      <TagChrome :is-dark="dark" primary-color="#5856D6">
        active
      </TagChrome>
      <TagChrome :is-dark="dark" primary-color="#5856D6" :is-last="true">
        active
      </TagChrome>
    </div>
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
}
.tab-shadow {
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
}
</style>
