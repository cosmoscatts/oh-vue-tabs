import TagChrome from './components/TagChrome.vue'
import TagDefault from './components/TagDefault.vue'

export {
  TagChrome,
  TagDefault,
}

type FillColor = [string, string]
type MixRatio = [number, number]

interface TagProps {
  isDark?: boolean
  isActive?: boolean
  primaryColor?: string
  closable?: boolean
}

export interface TagDefaultProps extends TagProps {
  borderColor?: string
  borderDarkColor?: string
}

export interface TagChromeProps extends TagProps {
  bgColor?: FillColor
  hoverBgColor?: FillColor
  mixColor?: FillColor
  mixRatio?: MixRatio
  isLast?: boolean
}


