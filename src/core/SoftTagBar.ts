import { defineComponent, h } from 'vue'
import { TagDefault } from './TagDefault'
import { TagChrome } from './TagChrome'
import { SoftBarProps } from '~/options'

export const SoftTagBar = defineComponent({
  name: 'SoftTagBar',
  props: SoftBarProps,
  setup(props, { slots }) {
    const { mode, ...tagProps } = props
    const component = mode === 'chrome'
      ? TagChrome
      : TagDefault

    return () => {
      return h(
        component,
        {
          ...tagProps,
        },
        slots,
      )
    }
  },
})
