import { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import { NavigateFunction } from 'react-router-dom'
import { v4 } from 'uuid'

import { copyToClipboard, download, getYaml } from 'shared/helpers/utils'

import { IForm, IHeader, IQueryParam } from './setup.types'

export const handleBackClick = (
  navigate: NavigateFunction
): MouseEventHandler => {
  const handler: MouseEventHandler = () => {
    navigate('/')
  }

  return handler
}

export const handleAddQueryParamClick = (
  queryParams: IQueryParam[],
  setQueryParams: Dispatch<SetStateAction<IQueryParam[]>>,
  uuid: typeof v4
): MouseEventHandler => {
  const handler: MouseEventHandler = () => {
    setQueryParams([...queryParams, { key: '', value: '', uuid: uuid() }])
  }

  return handler
}

export const handleAddHeaderClick = (
  headers: IHeader[],
  setHeaders: Dispatch<SetStateAction<IHeader[]>>,
  uuid: typeof v4
): MouseEventHandler => {
  const handler: MouseEventHandler = () => {
    setHeaders([...headers, { key: '', values: [], uuid: uuid() }])
  }
  return handler
}

export const formatQueryParams = (
  queryParams: IQueryParam[]
): Record<string, string> | undefined => {
  const formattedQueryParams: Record<string, string> = {}

  queryParams.forEach((queryParam) => {
    if (queryParam.key === '' && queryParam.value === '') {
      return
    }

    formattedQueryParams[queryParam.key] = queryParam.value
  })

  return Object.keys(formattedQueryParams).length
    ? formattedQueryParams
    : undefined
}

export const formatHeaders = (
  headers: IHeader[]
): Record<string, string[]> | undefined => {
  const formattedHeaders: Record<string, string[]> = {}

  headers.forEach((header) => {
    const hasValue = header.values.reduce((acc, curr) => {
      if (!acc) {
        acc = curr.value !== ''
      }

      return acc
    }, false)

    if (header.key === '' && !hasValue) {
      return
    }

    formattedHeaders[header.key] = header.values.map((value) => value.value)
  })

  return Object.keys(formattedHeaders).length ? formattedHeaders : undefined
}

export const formatOut = (
  benchttpOutput: boolean,
  jsonOutput: boolean,
  stdoutOutput: boolean
): string[] | undefined => {
  const outs = []

  if (benchttpOutput) {
    outs.push('benchttp')
  }

  if (jsonOutput) {
    outs.push('json')
  }

  if (stdoutOutput) {
    outs.push('stdout')
  }

  return outs.length > 0 ? outs : undefined
}

export const handleDownloadYamlClick = (
  config: IForm | undefined
): MouseEventHandler => {
  const handler: MouseEventHandler = () => {
    download('config.yaml', getYaml(config))
  }

  return handler
}

export const handleCopyCommandClick = (
  config: IForm | undefined
): MouseEventHandler => {
  const handler: MouseEventHandler = async () => {
    if (!config) {
      return
    }

    const queryParams = new URLSearchParams()

    let urlArg = ''
    const methodArg = ` -method ${config.request.method}`
    let headersArg = ''
    let requestsArg = ''
    let concurrencyArg = ''
    let intervalArg = ''
    let globalTimeoutArg = ''
    let requestTimeoutArg = ''
    let outArg = ''
    const silentArg = config.output.silent ? ' -silent' : ''

    if (config.request.queryParams) {
      for (const param in config.request.queryParams) {
        queryParams.append(param, config.request.queryParams[param])
      }
    }

    if (config.request.headers) {
      for (const headerKey in config.request.headers) {
        config.request.headers[headerKey].forEach((headerValue) => {
          headersArg = headersArg.concat(
            ` -header '${headerKey}:${headerValue}'`
          )
        })
      }
    }

    if (config.request.url) {
      urlArg = ` -url ${config.request.url}`

      if ([...queryParams].length) {
        urlArg = urlArg.concat(`?${queryParams.toString()}`)
      }
    }

    if (config.runner.requests) {
      requestsArg = ` -requests ${config.runner.requests}`
    }

    if (config.runner.concurrency) {
      concurrencyArg = ` -concurrency ${config.runner.concurrency}`
    }

    if (config.runner.interval) {
      intervalArg = ` -interval ${config.runner.interval}`
    }

    if (config.runner.globalTimeout) {
      globalTimeoutArg = ` -globalTimeout ${config.runner.globalTimeout}`
    }

    if (config.runner.requestTimeout) {
      requestTimeoutArg = ` -requestTimeout ${config.runner.requestTimeout}`
    }

    if (config.output.out) {
      outArg = ` -out ${config.output.out.toString()}`
    }

    await copyToClipboard(
      `./bin/benchttp${urlArg}${methodArg}${headersArg}${requestsArg}${concurrencyArg}${intervalArg}${globalTimeoutArg}${requestTimeoutArg}${outArg}${silentArg}`
    )
    window.alert('command copyed to clipboard')
  }

  return handler
}
