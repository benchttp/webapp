import { useEffect } from 'react'
import { METHOD_OPTIONS } from './setup.constants'
import { formatHeaders, formatOut, formatQueryParams } from './setup.helpers'
import { IHook } from './setup.types'

export const useSetup: IHook = ({
  setConfig,
  url,
  selectedMethodIndex,
  queryParams,
  headers,
  requests,
  concurrency,
  interval,
  requestTimeout,
  globalTimeout,
  body,
  benchttpOutput,
  jsonOutput,
  stdoutOutput,
  silentOutput,
}) => {
  useEffect(() => {
    setConfig({
      request: {
        url: url || undefined,
        method: METHOD_OPTIONS[selectedMethodIndex],
        queryParams: formatQueryParams(queryParams),
        headers: formatHeaders(headers),
        body: {
          type: 'raw',
          content: body || undefined,
        },
      },
      runner: {
        requests: requests !== '' ? Number(requests) : undefined,
        concurrency: concurrency !== '' ? Number(concurrency) : undefined,
        interval: interval !== '' ? `${interval}ms` : undefined,
        requestTimeout:
          requestTimeout !== '' ? `${requestTimeout}s` : undefined,
        globalTimeout: globalTimeout !== '' ? `${globalTimeout}s` : undefined,
      },
      output: {
        out: formatOut(benchttpOutput, jsonOutput, stdoutOutput),
        silent: silentOutput,
      },
    })
  }, [
    selectedMethodIndex,
    setConfig,
    url,
    queryParams,
    headers,
    requests,
    concurrency,
    interval,
    requestTimeout,
    globalTimeout,
    body,
    benchttpOutput,
    jsonOutput,
    stdoutOutput,
    silentOutput,
  ])
}
