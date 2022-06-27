import type { DefineComponent } from 'vue'

/**
 * @internal
 */
export const TagWidgetBtnClose = defineComponent({
  name: 'TagWidgetBtnClose',
  props: {
    port: {
      type: String,
      required: true,
    },
    component: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return () => {
      return (
        h(
          'button',
          {

          },
        )
      )
    }
  },
}) as DefineComponent<any>
