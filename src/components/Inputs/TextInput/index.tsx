import { createElement, FC } from 'react'

import { COLORS, Colors, ICONS } from 'shared/style/constants'

import { handleChange } from './core/textInput.helpers'
import { IProps } from './core/textInput.types'
import { StyledTextInput } from './core/textInput.styles'

export const TextInput: FC<IProps> = (props) => {
  const {
    label,
    name,
    placeholder,
    icon,
    className,
    setValue,
    value,
    iconColor = Colors.GREY2,
  } = props

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
          onChange={handleChange(setValue)}
          placeholder={placeholder}
          name={name}
          id={name}
          type="text"
          value={value}
        />
        {icon &&
          createElement(ICONS[icon], {
            color: COLORS[iconColor],
            className: 'icon',
          })}
      </div>
    </StyledTextInput>
  )
}
