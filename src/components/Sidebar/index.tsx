import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import { SidebarCard, TextInput } from 'components'
import { Icons } from 'shared/icons'

import { handleCardClick, onChange } from './typescript/sidebar.helpers'
import { useSidebar } from './typescript/sidebar.hook'
import { StyledSidebar } from './typescript/sidebar.styles'
import { IForm, IProps } from './typescript/sidebar.types'

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
    <StyledSidebar className={`${className || ''} p-4`}>
      <TextInput
        control={control}
        name="search"
        placeholder="Search ..."
        hasIcon
        icon={Icons.search}
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
