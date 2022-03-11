import { FC } from 'react'
import { Check } from 'react-feather'

import { COLORS } from 'shared/style/constants'

import { handleChange } from './core/checkbox.helpers'
import { StyledCheckbox } from './core/checkboxInput.styles'
import { IProps } from './core/checkboxInput.types'

export const CheckboxInput: FC<IProps> = (props) => {
  const { label, name, className, checked, setChecked } = props

  return (
    <StyledCheckbox
      {...props}
      className={`f f-direction-row-reverse f-ai-center ${className || ''}`}
    >
      {label && (
        <label className="ml-1" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="input f f-ai-center">
        <input
          onChange={handleChange(checked, setChecked)}
          name={name}
          id={name}
          type="checkbox"
          checked={checked}
        />
        <Check
          size={12}
          className="icon"
          color={COLORS.grey1}
          strokeWidth={3}
        />
      </div>
    </StyledCheckbox>
  )
}
