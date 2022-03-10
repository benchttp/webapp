import { stringify } from 'yaml'

export const debounce = (fn: Function, ms: number) => {
  let timeoutId: ReturnType<typeof setTimeout>

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

export const getInitials = (str: string) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase()
}
export const download = (filename: string, text: string) => {
  const element = document.createElement('a')
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  )
  element.setAttribute('download', filename)

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}

export const getYaml = (object: unknown) => {
  return stringify(object, { simpleKeys: true })
}

export const copyToClipboard = (text: string) => {
  const clipboard = navigator.clipboard
  return clipboard.writeText(text)
}
