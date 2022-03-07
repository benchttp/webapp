import { createElement, FC } from 'react'
import { useController } from 'react-hook-form'

import { Colors } from 'shared/style/constants'

import { handleChange } from './core/textInput.helpers'
import { IProps } from './core/textInput.interfaces'
import { StyledTextInput } from './core/textInput.styles'

export const TextInput: FC<IProps> = (props) => {
  const {
    label,
    name,
    placeholder,
    icon,
    iconColor = Colors.GREY2,
    submitOnChange,
    onChange,
    className,
  } = props

  const { field } = useController(props)

  return (
    <StyledTextInput
      {...props}
      className={`f f-direction-column pb-2 ${className || ''}`}
    >
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
          createElement(icon, {
            color: iconColor,
            className: 'icon',
          })}
      </div>
    </StyledTextInput>
  )
}
