import { ref, unref } from 'vue'

export * from './color'

export function useBoolean(initValue = false) {
  const bool = ref(initValue)
  const setBool = (value: boolean) => bool.value = unref(value)
  const setTrue = () => setBool(true)
  const setFalse = () => setBool(false)
  const toggle = () => setBool(!bool.value)
  return {
    bool,
    setBool,
    setTrue,
    setFalse,
    toggle,
  }
}

export const ColorMap = {
  primaryColor: '#377BB5',
  defaultIconColor: '#9ca3af',
  borderColor: '#e5e7eb',
  borderDarkColor: '#ffffff3d',

  chromeBgColor: ['#ffffff', '#18181c'],
  chromeHoverBgColor: ['#dee1e6', '#2D2D2D'],
  chromeMixColor: ['#ffffff', '#000000'],
}
