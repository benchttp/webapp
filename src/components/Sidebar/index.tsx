import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Icons } from '../../shared/icons'
import TextInput from '../Inputs/TextInput'
import { onChange } from './typescript/sidebar.helpers'
import { useSidebar } from './typescript/sidebar.hook'
import { StyledSidebar } from './typescript/sidebar.styles'
import { IForm, IProps } from './typescript/sidebar.types'

const Sidebar: FC<IProps> = (props) => {
  const { className } = props
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
      />
    </StyledSidebar>
  )
}

export default Sidebar
