import { ref, unref } from 'vue'

export * from './color'

export function useBoolean(initValue = false) {
  const bool = ref(initValue)
  const  setBool = (value: boolean) => bool.value = unref(value)
  const  setTrue = () => setBool(true)
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

export enum ColorMap {
  primaryColor = '#377BB5',
  defaultIconColor = '#9ca3af',
  borderColor = '#e5e7eb',
  borderDarkColor = '#ffffff3d',
}

