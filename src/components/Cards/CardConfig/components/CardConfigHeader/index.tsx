import { FC, useContext } from 'react'

import { ExpansionPanelContext, Tag, Text } from 'components'
import { HttpMethods } from 'shared/helpers/constants'
import {
  Colors,
  FontFamilies,
  FontWeights,
  FontSizes,
} from 'shared/style/constants'
import { convertInMs } from 'shared/helpers/utils'
import { Download } from 'react-feather'
import { useGetReportsByIdQuery, useGetStatByIdQuery } from 'shared/store/apis'
import { useAppSelector } from 'shared/store'
import { skipToken } from '@reduxjs/toolkit/dist/query'

export const CardConfigHeader: FC = () => {
  const expansionPanelContext = useContext(ExpansionPanelContext)
  const { toggle, isOpen } = { ...expansionPanelContext }

  const selectedRunId = useAppSelector((state) => state.general.selectedRunId)
  const { data: stat } = useGetStatByIdQuery(selectedRunId ?? skipToken)
  const { data: report } = useGetReportsByIdQuery(selectedRunId ?? skipToken)

  return stat && report ? (
    <div>
      <div className="f f-jc-space-b f-ai-start mb-4">
        <div className="f f-ai-center">
          <Tag className="mr-2">
            {`${report.metadata.config.request.url.Scheme}://`}
            {report.metadata.config.request.url.Host}
            {report.metadata.config.request.url.Path}
          </Tag>
          <Tag
            background={Colors[report.metadata.config.request.method]}
            color={Colors.WHITE}
          >
            {HttpMethods[report.metadata.config.request.method]}
          </Tag>
        </div>
        <Download />
      </div>
      <div className="f f-jc-space-b f-ai-end">
        <div className="f f-ai-center">
          <div className="mr-7">
            <Text
              font={FontFamilies.POPPINS}
              weight={FontWeights.BOLD}
              size={FontSizes.LARGE}
            >
              {report.metadata.config.runner.requests}
            </Text>
            <Text weight={FontWeights.MEDIUM}>Requests</Text>
          </div>
          <div className="mr-7">
            <Text
              font={FontFamilies.POPPINS}
              weight={FontWeights.BOLD}
              size={FontSizes.LARGE}
            >
              {convertInMs(report.metadata.config.runner.interval)}
            </Text>
            <Text weight={FontWeights.MEDIUM}>Interval</Text>
          </div>
          <div className="mr-7">
            <Text
              font={FontFamilies.POPPINS}
              weight={FontWeights.BOLD}
              size={FontSizes.LARGE}
            >
              {convertInMs(report.metadata.config.runner.globalTimeout)}
            </Text>
            <Text weight={FontWeights.MEDIUM}>Test timeout</Text>
          </div>
          <div className="mr-7">
            <Text
              font={FontFamilies.POPPINS}
              weight={FontWeights.BOLD}
              size={FontSizes.LARGE}
            >
              {convertInMs(report.metadata.config.runner.requestTimeout)}
            </Text>
            <Text weight={FontWeights.MEDIUM}>Request timeout</Text>
          </div>
          <div>
            <Text
              font={FontFamilies.POPPINS}
              weight={FontWeights.BOLD}
              size={FontSizes.LARGE}
            >
              {report.metadata.config.runner.concurrency}
            </Text>
            <Text weight={FontWeights.MEDIUM}>Concurrency</Text>
          </div>
        </div>
        <div onClick={toggle} className="cursor-p">
          {!isOpen ? (
            <Text font={FontFamilies.POPPINS} weight={FontWeights.BOLD}>
              Show config details
            </Text>
          ) : (
            <Text font={FontFamilies.POPPINS} weight={FontWeights.BOLD}>
              Hide config details
            </Text>
          )}
        </div>
      </div>
    </div>
  ) : null
}
