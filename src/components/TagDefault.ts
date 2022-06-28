import type { DefineComponent } from 'vue'
import { TagWidgetBtnClose } from './TagWidgetBtnClose'
import { TagDefaultProps } from '~/options'

export const TagDefault = defineComponent({
  name: 'TagDefault',
  props: TagDefaultProps,
  setup(_props, _ctx) {
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
