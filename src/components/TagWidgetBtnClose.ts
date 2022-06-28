import type { DefineComponent } from 'vue'
import { Transition } from 'vue'
import { CssRender } from 'css-render'
import { TagWidgetBtnCloseProps } from '~/options'
import { useBoolean } from '~/composbales'

/**
 * @internal
 */
export const TagWidgetBtnClose = defineComponent({
  name: 'TagWidgetBtnClose',
  props: TagWidgetBtnCloseProps,
  setup({ isActive, defaultColor, activeColor }) {
    const { c } = CssRender()
    const { bool: isHover, setTrue, setFalse } = useBoolean()
    const style = c(
      '.tag-widget-close-btn_wrapper-fade',
      {},
      [
        c('&-enter-active, &-leave-active', { transition: 'opacity 0.3s ease-in-out' }),
        c('&-enter-from, &-leave-to', { opacity: 0 }),
      ],
    )
    style.render()
    style.mount()

    const tagWidgetBtnWrapperClazz = 'relative flex justify-center items-center w-18px h-18px text-14px'
    const tagWidgetBtnWrapperStyle = computed(() => {
      return {
        color: isActive
          ? activeColor
          : defaultColor,
      }
    })
    const TagWidgetBtnCloseClazz = computed(() => {
      return [
        unref(isHover)
          ? ''
          : '',
        'icon-btn absolute w-16px h-16px',
      ].join(' ')
    })

    return () => {
      return h(
        'div',
        {
          class: tagWidgetBtnWrapperClazz,
          style: tagWidgetBtnWrapperStyle,
          onmouseenter: setTrue,
          onmouseleave: setFalse,
        },
        h(
          Transition,
          {
            class: 'tag-widget-close-btn_wrapper-fade',
          },
          h(
            'button',
            {
              class: TagWidgetBtnCloseClazz,
            },
          ),
        ),
      )
    }
  },
}) as DefineComponent
