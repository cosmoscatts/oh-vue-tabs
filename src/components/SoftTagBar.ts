import { TagDefault } from '~/components/TagDefault'
import { TagChrome } from '~/components/TagChrome'
import { SoftBarProps } from '~/options'

export const SoftTagBar = defineComponent({
  name: 'SoftTagBar',
  props: SoftBarProps,
  setup(props, { slots }) {
    const { mode, ...tagProps } = props
    console.log(tagProps)
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
