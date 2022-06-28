import type { DefineComponent } from 'vue'
import { TagWidgetBtnClose } from './TagWidgetBtnClose'

export const TagDefault = defineComponent({
  name: 'TagDefault',
  props: {

  },
  setup(props, ctx) {
    const wrapperClass = ''
    return () => {
      return h(
        'div',
        {
          class: wrapperClass,

        },
        [
          h(
            'span',
            {

            },
            () => '',
          ),
          h(
            TagWidgetBtnClose,
            {

            },
          ),
        ],
      )
    }
  },
}) as DefineComponent<any>
