import { FC, useState } from 'react'

import { CardSidebar, TextInput } from 'components'
import { Colors, Icons } from 'shared/style/constants'

import { handleCardClick } from './core/sidebar.helpers'
import { useSidebar } from './core/sidebar.hook'
import { StyledSidebar } from './core/sidebar.styles'
import { IProps } from './core/sidebar.types'
import { Loader } from 'react-feather'
import { setSelectedRun } from 'shared/store/slices/general'
import { useAppDispatch, useAppSelector } from 'shared/store'
import { useGetStatsQuery } from 'shared/store/apis'
import { formatDate } from 'shared/helpers/utils'

export type { IProps as ISidebarProps } from './core/sidebar.types'

export const Sidebar: FC<IProps> = (props) => {
  const { className } = props
  const [search, setSearch] = useState('')

  const { data: stats, isLoading } = useGetStatsQuery()

  const selectedRunId = useAppSelector((state) => state.general.selectedRunId)
  const dispatch = useAppDispatch()

  useSidebar({ search })

  return (
    <StyledSidebar {...props} className={`${className || ''} p-4`}>
      <TextInput
        name="search"
        placeholder="Search ..."
        icon={Icons.SEARCH}
        iconColor={Colors.WHITE}
        className="mb-4"
        value={search}
        setValue={setSearch}
      />
      {isLoading ? (
        <div className="f f-center">
          <Loader />
        </div>
      ) : (
        stats &&
        stats.map((stat) => (
          <CardSidebar
            key={stat.id}
            active={stat.id === selectedRunId}
            onClick={handleCardClick(dispatch, setSelectedRun, stat.id)}
          >
            {formatDate(stat.finishedAt)}
          </CardSidebar>
        ))
      )}
    </StyledSidebar>
  )
}
