import { createElement, FC } from 'react'
import { useController } from 'react-hook-form'
import { ICONS } from '../../../shared/icons'
import { Colors } from '../../../shared/style/constants'
import { handleChange } from './typescript/textInput.helpers'
import { IProps } from './typescript/textInput.interfaces'
import { StyledTextInput } from './typescript/textInput.styles'

const TextInput: FC<IProps> = (props) => {
  const {
    label,
    name,
    placeholder,
    icon,
    iconColor = Colors.GREY2,
    submitOnChange,
    onChange,
  } = props

  const { field } = useController(props)

  return (
    <StyledTextInput {...props} className="f f-direction-column">
      {label && (
        <label className="mb-2" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="input f f-ai-center">
        <input
          {...field}
          onChange={handleChange(submitOnChange, onChange, field.onChange)}
          placeholder={placeholder}
          name={name}
          id={name}
          type="text"
        />
        {icon &&
          createElement(ICONS[icon], {
            color: iconColor,
            className: 'icon',
          })}
      </div>
    </StyledTextInput>
  )
}

export default TextInput
