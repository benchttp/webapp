import { FC } from 'react'
import { ChevronDown } from 'react-feather'
import { COLORS } from 'shared/style/constants'
import { handleChange } from './core/selectInput.helpers'
import { StyledSelectInput } from './core/selectInput.styles'
import { IProps } from './core/selectInput.types'

export const SelectInput: FC<IProps> = (props) => {
  const {
    name,
    label,
    options,
    className,
    placeholder,
    selectedIndex,
    setSelectedIndex,
  } = props

  return (
    <StyledSelectInput
      {...props}
      className={`f f-direction-column ${className || ''}`}
    >
      {label && (
        <label className="mb-2" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="input f f-ai-center">
        <select
          onChange={handleChange(setSelectedIndex)}
          name={name}
          id={name}
          value={options[selectedIndex]}
        >
          {placeholder && <option disabled>{placeholder}</option>}
          {options.map((option, index) => (
            <option key={option} value={index}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="icon" size={16} color={COLORS.white} />
      </div>
    </StyledSelectInput>
  )
}
