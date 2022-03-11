import { useEffect } from 'react'

import { useAppDispatch } from 'shared/store'
import { useGetStatsQuery } from 'shared/store/apis/benchttp'
import { setSelectedRun } from 'shared/store/slices/general'

import { IHook } from './home.types'

export const useHome: IHook = ({ selectedRunId }) => {
  const { data: stats } = useGetStatsQuery()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (selectedRunId || !stats || stats.length === 0) {
      return
    }

    dispatch(setSelectedRun(stats[0].id))
  })
}
