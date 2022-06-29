export interface TagProps {
  isDark?: boolean
  isActive?: boolean
  primaryColor?: string
  closable?: boolean
}

export interface TagDefaultProps extends TagProps {
  borderColor?: string
  borderDarkColor?: string
}

/** 填充颜色： [默认颜色, 暗黑主题颜色] */
export type FillColor = [string, string]
/** 混合比例：[默认, 暗黑] */
export type MixRatio = [number, number]

export interface TagChromeProps extends TagProps {
  bgColor?: FillColor
  hoverBgColor?: FillColor
  mixColor?: FillColor
  mixRatio?: MixRatio
}

export interface SoftTagBarProps extends TagDefaultProps, TagChromeProps {
  mode?: 'default' | 'chrome'
}

export interface TagButtonCloseProps {
  isActive?: boolean
  defaultColor?: string
  activeColor?: string
}
