import { FC, useState } from 'react'

import { SidebarCard, TextInput } from 'components'
import { Colors, Icons } from 'shared/style/constants'

import { handleCardClick } from './core/sidebar.helpers'
import { useSidebar } from './core/sidebar.hook'
import { StyledSidebar } from './core/sidebar.styles'
import { IProps } from './core/sidebar.types'

export const Sidebar: FC<IProps> = (props) => {
  const { className, tests } = props
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0)
  const [search, setSearch] = useState('')

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
      {tests.map((test, index) => (
        <SidebarCard
          key={test.name}
          active={index === activeCardIndex}
          onClick={handleCardClick(setActiveCardIndex, index)}
        >
          {test.name}
        </SidebarCard>
      ))}
    </StyledSidebar>
  )
}
