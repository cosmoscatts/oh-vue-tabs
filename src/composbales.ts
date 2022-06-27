import { CssRender } from 'css-render'
import type { CNode, CNodeChildren, CProperties, CSelector } from 'css-render'

/**
 * use js to render css
 */
export function useCssRender() {
  const { c } = CssRender()

  let style: CNode

  function cssRender(
    selector: CSelector,
    props: CProperties,
    children: CNodeChildren = [],
  ) {
    style = c(selector, props, children)
    style.render()
    style.mount()
  }

  onUnmounted(() => {
    style?.unmount()
  })

  return {
    cssRender,
  }
}

/**
 * Boolean Ref Factory
 */
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
