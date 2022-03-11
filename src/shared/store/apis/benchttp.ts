import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IAPIReport, IAPIStat, IAPIStatDescriptor } from 'shared/types'

export const benchttpApi = createApi({
  reducerPath: 'benchttpApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getStats: builder.query<IAPIStatDescriptor[], void>({
      query: () => 'stats',
    }),
    getStatById: builder.query<IAPIStat, string>({
      query: (id) => `stats/${id}`,
    }),
    getReportsById: builder.query<IAPIReport, string>({
      query: (id) => `reports/${id}`,
    }),
  }),
})

export const { useGetReportsByIdQuery, useGetStatsQuery, useGetStatByIdQuery } =
  benchttpApi
