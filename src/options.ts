export const TagBarProps = {
  isDark: {
    type: Boolean,
    require: false,
  },
  isActive: {
    type: Boolean,
    require: false,
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
  ...TagDefaultProps,
  ...TagChromeProps,
}
