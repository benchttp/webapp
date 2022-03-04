export const debounce = (fn: Function, ms: number) => {
  let timeoutId: ReturnType<typeof setTimeout>

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}
