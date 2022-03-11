import { IAPIReport } from 'shared/types'

export const getHeadersArray = (report: IAPIReport | undefined) => {
  if (report === undefined) {
    return undefined
  }

  return Object.entries(report.metadata.config.request.header)
}
