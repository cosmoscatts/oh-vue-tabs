import { TagDefault } from '~/components/TagDefault'
import { TagChrome } from '~/components/TagChrome'

export const SoftTagBar = defineComponent({
  name: 'SoftTagBar',
  props: {
    mode: '',
  },
  setup(props) {
    const component = props.mode === 'chrome'
      ? TagChrome
      : TagDefault
    return () => ({
      h(component, null, {
        
      }),
    })
  },
})
