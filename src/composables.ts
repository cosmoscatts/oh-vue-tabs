import type { Ref } from 'vue'
import { ref, unref } from 'vue'

type maybeRef<T> = T | Ref<T>

export function useBoolean(initValue: maybeRef<boolean>) {
  const bool = ref(initValue)

  function setBool(value: maybeRef<boolean>) {
    bool.value = unref(value)
  }

  function setTrue() {
    setBool(true)
  }

  function setFalse() {
    setBool(false)
  }

  function toggle() {
    setBool(!unref(bool))
  }

  return {
    bool,
    setBool,
    setTrue,
    setFalse,
    toggle,
  }
}
