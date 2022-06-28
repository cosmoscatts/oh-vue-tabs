import { TagDefault } from '~/components/TagDefault'
import { TagChrome } from '~/components/TagChrome'
import { SoftBarProps } from '~/options'

export const SoftTagBar = defineComponent({
  name: 'SoftTagBar',
  props: SoftBarProps,
  setup(props) {
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
      )
    }
  },
})
