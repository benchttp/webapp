import { TextInput } from 'components/Inputs/TextInput'
import { FC, useState } from 'react'
import { PlusCircle, Trash2 } from 'react-feather'
import {
  handleAddHeaderValueClick,
  handleDeleteHeaderValueClick,
} from './core/headerInputValue.helpers'
import { useHeaderInputValue } from './core/headerInputValue.hook'
import { StyledHeaderInputValue } from './core/headerInputValue.styles'
import { IProps } from './core/headerInputValue.types'

export const HeaderInputValue: FC<IProps> = (props) => {
  const { index, headerIndex, values, setValues, className } = props
  const [value, setValue] = useState('')

  useHeaderInputValue({ index, values, setValues, value })

  return (
    <StyledHeaderInputValue className={`f f-ai-end ${className || ''}`}>
      <TextInput
        className="value mr-3"
        name={`header-${headerIndex}-value-${index}`}
        label="Value"
        placeholder="text/html"
        value={value}
        setValue={setValue}
      />
      <PlusCircle
        onClick={handleAddHeaderValueClick(values, setValues, index)}
        className="mr-3 mb-2"
      />
      <Trash2
        onClick={handleDeleteHeaderValueClick(values, setValues, index)}
        className="mb-2"
      />
    </StyledHeaderInputValue>
  )
}
