export const TagWidgetBtnCloseProps = {
  isActive: {
    type: Boolean,
    required: true,
  },
  defaultColor: {
    type: String,
    required: false,
  },
  activeColor: {
    type: String,
    required: false,
  },
} as const

export const TagBarProps = {
  darkMode: {
    type: Boolean,
    require: true,
  },
  isActive: {
    type: Boolean,
    require: true,
  },
  primaryColor: {
    type: String,
    require: false,
  },
  borderColor: {
    type: String,
    require: false,
  },
  darkBorderColor: {
    type: String,
    require: false,
  },
  closable: {
    type: Boolean,
    require: false,
  },
} as const

export const TagDefaultProps = {
  ...TagBarProps,
} as const

export const TagChromeProps = {
  ...TagBarProps,
} as const

export const SoftBarProps = {
  mode: {
    type: String,
    require: true,
  },
  props: {
    type: Object,
    require: true,
  },
}
