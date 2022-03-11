import { Dispatch, SetStateAction } from 'react'

import { IHeaderValue } from 'pages/Setup/components/HeaderInput/core/headerInput.types'

export interface IForm {
  request: {
    url: string | undefined
    method: string
    queryParams: Record<string, string> | undefined
    headers: Record<string, string[]> | undefined
    body: {
      type: 'raw'
      content: string | undefined
    }
  }
  runner: {
    requests: number | undefined
    concurrency: number | undefined
    interval: string | undefined
    requestTimeout: string | undefined
    globalTimeout: string | undefined
  }
  output: {
    out: string[] | undefined
    silent: boolean
  }
}

export interface IQueryParam {
  uuid: string
  key: string
  value: string
}

export interface IHeader {
  uuid: string
  key: string
  values: IHeaderValue[]
}

export type IHook = (params: {
  setConfig: Dispatch<SetStateAction<IForm | undefined>>
  url: string
  selectedMethodIndex: number
  queryParams: IQueryParam[]
  headers: IHeader[]
  requests: string
  concurrency: string
  interval: string
  requestTimeout: string
  globalTimeout: string
  body: string
  benchttpOutput: boolean
  jsonOutput: boolean
  stdoutOutput: boolean
  silentOutput: boolean
}) => void
