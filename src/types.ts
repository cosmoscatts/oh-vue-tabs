/** 填充颜色： [默认颜色, 暗黑主题颜色] */
export type FillColor = [string, string]

/** 混合比例：[默认, 暗黑] */
export type MixRatio = [number, number]

export interface TagDefaultProps {
  isDark?: boolean
  isActive?: boolean
  primaryColor?: string
  borderColor?: string
  darkBorderColor?: string
  closable?: boolean
}
export interface TagChromeProps {
  isDark?: boolean
  isActive?: boolean
  primaryColor?: string
  closable?: boolean
  bgColor?: FillColor
  hoverBgColor?: FillColor
  mixColor?: FillColor
  mixRatio?: MixRatio
}
