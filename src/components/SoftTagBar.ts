import type { Component } from 'vue'
import { TagDefault } from '~/components/TagDefault'
import { TagChrome } from '~/components/TagChrome'
import { SoftBarProps } from '~/options'

export const SoftTagBar = defineComponent({
  name: 'SoftTagBar',
  props: SoftBarProps,
  setup(props) {
    const component: Component = props.mode === 'chrome'
      ? TagChrome
      : TagDefault

    return () => {
      return h(
        component,
      )
    }
  },
})
