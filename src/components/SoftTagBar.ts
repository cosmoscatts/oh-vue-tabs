import { TagDefault } from '~/components/TagDefault'
import { TagChrome } from '~/components/TagChrome'
import { Component } from 'vue'

export const SoftTagBar = defineComponent({
  name: 'SoftTagBar',
  props: {
    mode: String,
  },
  setup(props) {
    const component: Component = props.mode === 'chrome'
      ? TagChrome
      : TagDefault
    return () => ({
      h(component),
    })
  },
})
