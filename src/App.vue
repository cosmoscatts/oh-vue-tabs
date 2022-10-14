<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import TabButton from '~/components/TabButton.vue'
import TabChrome from '~/components/TabChrome.vue'

const isDark = ref(false)

const setMode2Body = (mode: boolean) => {
  if (mode)
    document.querySelector('html')!.setAttribute('class', 'dark')
  else document.querySelector('html')!.removeAttribute('class')
}

watch(isDark, setMode2Body)

const toggleDark = () => isDark.value = !isDark.value

const THEME_COLORS = [
  '#377BB5',
  '#CA3832',
  '#EE8732',
  '#9C5BDE',
  '#43912B'
]
const pickedColorId = ref(0)
const pickedColor = computed(() => THEME_COLORS[pickedColorId.value])

function pickColor(colorId: number) {
  pickedColorId.value = colorId
}
</script>

<template>
  <div h-screen w-70vw bg-transparent mx-a text-18px>
    <div flex="~ gap2" items-center px8 pt8 pb2>
      <h1 text="4xl primary" font="bold italic">
        Oh Vue Tabs
      </h1>
      <div flex-auto />
      <a icon-btn i-carbon-logo-github href="https://github.com/cosmoscatts/oh-vue-tabs" target="_blank"
        title="GitHub" />
      <button icon-btn i-carbon-sun dark:i-carbon-moon @click="toggleDark" />
    </div>

    <div flex items-center h-50px mt-20px>
      <h2 font-bold text-2xl>Colors</h2>
      <ul flex justify-between gap-x-4 ml-40px>
        <li v-for="(color, i) in THEME_COLORS" :key="`${i}-color`" w-6 h-6 rounded text-white cursor-pointer
          :style="{ backgroundColor: color }" @click="pickColor(i)">
          <div v-show="pickedColorId === i" w-full h-full flex justify-center items-center>
            <svg width="1em" height="1em" viewBox="0 0 32 32">
              <path fill="currentColor" d="m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"></path>
            </svg>
          </div>
        </li>
      </ul>
    </div>

    <h2 text-2xl font-bold mt-30px>Button Tabs</h2>
    <div class="tab" bg="white dark:dark" flex items-center gap-x-3>
      <TabButton :is-dark="isDark" :primary-color="pickedColor">
        default
      </TabButton>
      <TabButton :is-dark="isDark" :is-active="true" :primary-color="pickedColor">
        active
      </TabButton>
      <TabButton :is-dark="isDark" :closable="false" :primary-color="pickedColor">
        no-close
      </TabButton>
      <TabButton :is-dark="isDark" :primary-color="pickedColor">
        default2
      </TabButton>
      <TabButton :is-dark="isDark" :primary-color="pickedColor">
        default3
      </TabButton>
    </div>

    <h2 text-2xl font-bold mt-30px>Chrome Tabs</h2>
    <div class="tab" bg="white dark:dark">
      <TabChrome :is-dark="isDark" :bg-color="['#ffffff', '#222222']" :primary-color="pickedColor">
        default
      </TabChrome>
      <TabChrome :is-dark="isDark" :bg-color="['#ffffff', '#222222']" :primary-color="pickedColor" :is-active="true">
        active
      </TabChrome>
      <TabChrome :is-dark="isDark" :bg-color="['#ffffff', '#222222']" :primary-color="pickedColor" :closable="false">
        no-close
      </TabChrome>
      <TabChrome :is-dark="isDark" :bg-color="['#ffffff', '#222222']" :primary-color="pickedColor">
        default2
      </TabChrome>
      <TabChrome :is-dark="isDark" :bg-color="['#ffffff', '#222222']" :primary-color="pickedColor" :is-last="true">
        default3
      </TabChrome>
    </div>
  </div>
</template>

<style scoped>
.tab {
  height: 50px;
  padding: 8px 16px;
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
}
</style>
