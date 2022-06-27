export function useBoolean(initValue = false) {
  const bool = ref(initValue)

  function setBool(value: boolean) {
    bool.value = value
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
