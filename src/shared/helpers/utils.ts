export const debounce = (fn: Function, ms: number) => {
  let timeoutId: ReturnType<typeof setTimeout>

  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}
