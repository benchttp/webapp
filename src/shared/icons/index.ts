import { IconLightning } from './IconLightning'
import { IconSearch } from './IconSearch'
import { IconTime } from './IconTime'

export enum Icons {
  search = 'search',
  lightning = 'lightning',
  time = 'time',
}

export const ICONS = {
  [Icons.search]: IconSearch,
  [Icons.lightning]: IconLightning,
  [Icons.time]: IconTime,
}
