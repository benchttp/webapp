import { createElement, FC } from 'react'

import { COLORS, Colors, ICONS } from 'shared/style/constants'

import { handleChange } from './core/numberInput.helpers'
import { IProps } from './core/numberInput.types'
import { StyledTextInput } from './core/numberInput.styles'

export const NumberInput: FC<IProps> = (props) => {
  const {
    label,
    name,
    placeholder,
    icon,
    className,
    setValue,
    value,
    iconColor = Colors.GREY2,
    min,
    max,
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
          type="number"
          value={value}
          min={min}
          max={max}
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
