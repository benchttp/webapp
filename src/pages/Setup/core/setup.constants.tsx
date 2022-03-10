import { DEFAULT_HEADER_VALUES } from 'pages/Setup/components/HeaderInput/core/headerInput.constants'
import { HttpMethods } from 'shared/helpers/constants'
import { v4 as uuid } from 'uuid'

export const METHOD_OPTIONS: string[] = [
  HttpMethods.GET,
  HttpMethods.POST,
  HttpMethods.PUT,
  HttpMethods.PATCH,
  HttpMethods.DELETE,
]

export const DEFAULT_QUERY_PARAMS = [
  {
    key: '',
    value: '',
    uuid: uuid(),
  },
]

export const DEFAULT_HEADERS = [
  {
    key: '',
    values: DEFAULT_HEADER_VALUES,
    uuid: uuid(),
  },
]
