import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import { SidebarCard, TextInput } from 'components'
import { Colors } from 'shared/style/constants'

import { handleCardClick, onChange } from './core/sidebar.helpers'
import { useSidebar } from './core/sidebar.hook'
import { StyledSidebar } from './core/sidebar.styles'
import { IForm, IProps } from './core/sidebar.types'
import { Search } from 'react-feather'

export const Sidebar: FC<IProps> = (props) => {
  const { className, tests } = props
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0)
  const { control, handleSubmit } = useForm<IForm>({
    defaultValues: {
      search: '',
    },
  })

  const { debouncedHandleSearchInputChange } = useSidebar()

  return (
    <StyledSidebar {...props} className={`${className || ''} p-4`}>
      <TextInput
        control={control}
        name="search"
        placeholder="Search ..."
        hasIcon
        icon={Search}
        iconColor={Colors.WHITE}
        submitOnChange
        onChange={onChange(handleSubmit, debouncedHandleSearchInputChange)}
        className="mb-4"
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
