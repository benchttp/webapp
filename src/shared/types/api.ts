import { HttpMethods } from 'shared/helpers/constants'

export interface IAPIReport {
  benchmark: {
    records: {
      time: number
      code: number
      bytes: number
      error: string
      events: {
        name: string
        time: number
      }[]
    }[]
    length: number
    success: number
    fail: number
    duration: number
  }
  metadata: {
    config: {
      request: {
        method: HttpMethods
        url: {
          Scheme: string
          Opaque: string
          User: string
          Host: string
          Path: string
          RawPath: string
          ForceQuery: boolean
          RawQuery: string
          Fragment: string
          RawFragment: string
        }
        header: Record<string, string[]>
        body: {
          type: string
          content: string
        }
      }
      runner: {
        requests: number
        concurrency: number
        interval: number
        requestTimeout: number
        globalTimeout: number
      }
    }
    finishedAt: string
  }
}

export interface IAPIStatDescriptor {
  id: string
  tag: string
  finishedAt: string
}

export interface IAPIStat {
  descriptor: IAPIStatDescriptor
  time: {
    min: number
    max: number
    mean: number
    median: number
    standardDeviation: number
    deciles: number[]
  }
  code: {
    code1xx: number
    code2xx: number
    code3xx: number
    code4xx: number
    code5xx: number
  }
}
