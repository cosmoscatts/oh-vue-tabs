import type { DefineComponent } from 'vue'
import { CssRender } from 'css-render'
import TagWidgetBtnClose from './TagWidgetBtnClose.vue'
import { TagDefaultProps } from '~/options'
import { useBoolean } from '~/composables'
import { addColorAlpha } from '~/utils'

export const TagDefault = defineComponent({
  name: 'TagDefault',
  props: TagDefaultProps,
  setup(
    {
      isDark = false,
      isActive = false,
      primaryColor = '#1890ff',
      borderColor = '#e5e7eb',
      darkBorderColor = 'red',
      closable = true,
    },
    {
      slots,
    },
  ) {
    console.log({
      isDark,
    })
    const { bool: isHover, setTrue, setFalse } = useBoolean()
    const isIconActive = computed(() => isActive || unref(isHover))
    console.log(closable)

    const { c } = CssRender()
    const style = c(
      '.soft-tagbar__button-tag',
      {
        position: 'relative',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30px',
        paddingLeft: '14px',
        paddingRight: '6px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '2px',
        cursor: 'pointer',
      },
      [
        c('&-unclosable', { paddingRight: '14px !important' }),
        c('&-preffix', { whiteSpace: 'nowrap' }),
        c('&-icon', { paddingLeft: '10px' }),
      ],
    )
    style.render()
    style.mount()

    const buttonWrapperClazz = computed(() => {
      return !closable
        ? ['soft-tagbar__button-tag', 'soft-tagbar__button-tag-unclosable'].join(' ')
        : 'soft-tagbar__button-tag'
    })

    const buttonWrapperStyle = computed(() => {
      const style: Record<string, string> = {}
      style.borderColor = isDark
        ? darkBorderColor
        : borderColor
      if (unref(isIconActive)) {
        style.color = primaryColor
        style.borderColor = addColorAlpha(primaryColor, 0.3)
        if (isActive) {
          const alpha = isDark ? 0.15 : 0.1
          style.backgroundColor = addColorAlpha(primaryColor, alpha)
        }
      }
      return style
    })

    return () => {
      return h(
        'div',
        {
          class: unref(buttonWrapperClazz),
          style: unref(buttonWrapperStyle),
          onmouseenter: setTrue,
          onmouseleave: setFalse,
        },
        closable
          ? [
              h(
                'span',
                {
                  class: 'soft-tagbar__button-tag-preffix',
                },
                slots.default
                  ? h(slots.default)
                  : undefined,
              ),
              h(
                TagWidgetBtnClose,
                {
                  class: 'soft-tagbar__button-tag-icon',
                  isActive: unref(isIconActive),
                  activeColor: primaryColor,
                },
              ),

            ]
          : h(
            'span',
            {
              class: 'soft-tagbar__button-tag-preffix',
            },
            slots.default
              ? h(slots.default)
              : undefined,
          ),
      )
    }
  },
}) as DefineComponent

