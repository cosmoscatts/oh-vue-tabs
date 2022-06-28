<script setup lang="ts">
import { SoftTagBar } from './index'
import { useBoolean } from '~/composables'

const { bool: isDark, toggle } = useBoolean()
function handleDarkMode() {
  toggle()
}
</script>

<template>
  <div class="h-full p-24px text-14px bg-[#f6f9f8]" :class="isDark ? '!bg-[#101014] text-light' : '' ">
    <div>
      <span class="pr-24px text-24px font-bold">暗黑模式</span>
      <input type="checkbox" :checked="isDark" @change="handleDarkMode">
    </div>
    <h3 class="pb-24px text-24px font-bold">
      ButtonTab
    </h3>
    <div class="tab-shadow pl-16px py-8px bg-white" :class="isDark ? '!bg-dark text-white' : '' ">
      <SoftTagBar mode="default" :is-dark="isDark">
        default
      </SoftTagBar>
      <!-- <SoftTagBar :is-dark="darkMode" :is-active="true" class="ml-12px">
        active
      </SoftTagBar>
      <SoftTagBar :is-dark="darkMode" :closable="false" class="ml-12px">
        no-close
      </SoftTagBar> -->
    </div>
    <div class="tab-shadow px-16px py-8px mt-12px bg-white" :class="isDark ? '!bg-dark text-white' : '' ">
      <!-- <SoftTagBar :is-dark="darkMode" primary-color="#5856D6">
        default
      </SoftTagBar>
      <SoftTagBar :is-dark="darkMode" primary-color="#5856D6" :is-active="true" class="ml-12px">
        active
      </SoftTagBar>
      <SoftTagBar :is-dark="darkMode" primary-color="#5856D6" :closable="false" class="ml-12px">
        no-close
      </SoftTagBar> -->
    </div>
    <!-- <h3 class="py-24px text-24px font-bold">
      ChromeTab
    </h3>
    <div class="tab-shadow pl-16px py-8px bg-white" :class="{ '!bg-dark text-white': darkMode }">
      <chrome-tab :dark-mode="darkMode">
        default
      </chrome-tab>
      <chrome-tab :dark-mode="darkMode" :is-active="true">
        active
      </chrome-tab>
      <chrome-tab :dark-mode="darkMode" :closable="false">
        no-close
      </chrome-tab>
    </div>
    <div class="tab-shadow px-16px py-8px mt-12px bg-white" :class="{ '!bg-dark text-white': darkMode }">
      <chrome-tab :dark-mode="darkMode" primary-color="#5856D6">
        default
      </chrome-tab>
      <chrome-tab :dark-mode="darkMode" primary-color="#5856D6" :is-active="true">
        active
      </chrome-tab>
      <chrome-tab :dark-mode="darkMode" primary-color="#5856D6" :closable="false">
        no-close
      </chrome-tab>
    </div> -->
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
