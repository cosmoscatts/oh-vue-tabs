import TabButton from './components/TabButton.vue'
import TabChrome from './components/TabChrome.vue'

export {
  TabButton,
  TabChrome,
}

export type FillColor = [string, string]
export type MixRatio = [number, number]

interface TabProps {
  isDark?: boolean
  isActive?: boolean
  primaryColor?: string
  closable?: boolean
}

export interface TabButtonProps extends TabProps {
  borderColor?: string
  borderDarkColor?: string
}

export interface TabChromeProps extends TabProps {
  bgColor?: FillColor
  hoverBgColor?: FillColor
  mixColor?: FillColor
  mixRatio?: MixRatio
  isLast?: boolean
}


