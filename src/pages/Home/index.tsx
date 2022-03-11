import { FC } from 'react'

import { Text, CardConfig } from 'components'
import { FontFamilies, FontSizes } from 'shared/style/constants'
import { MainLayout } from 'layouts/MainLayout'
import { useGetReportsByIdQuery, useGetStatByIdQuery } from 'shared/store/apis'
import { useAppSelector } from 'shared/store'
import { Loader } from 'react-feather'
import { useHome } from './core/home.hook'
import { skipToken } from '@reduxjs/toolkit/dist/query'

export const Home: FC = () => {
  const selectedRunId = useAppSelector((state) => state.general.selectedRunId)

  useHome({ selectedRunId })

  const { isLoading: isStatLoading } = useGetStatByIdQuery(
    selectedRunId ?? skipToken
  )
  const { isLoading: isReportLoading } = useGetReportsByIdQuery(
    selectedRunId ?? skipToken
  )

  return (
    <MainLayout>
      {/* <Dropdown className="mb-4" /> */}
      {isStatLoading || isReportLoading ? (
        <Loader />
      ) : (
        <>
          <Text
            className="mb-4"
            font={FontFamilies.POPPINS}
            size={FontSizes.LARGE}
          >
            Config
          </Text>
          <CardConfig />
        </>
      )}
    </MainLayout>
  )
}
