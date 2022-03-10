import { FC } from 'react'
import { handleChange } from './core/textAreaInput.helpers'
import { StyledTextAreaInput } from './core/textAreaInput.styles'
import { IProps } from './core/textAreaInput.types'

export const TextAreaInput: FC<IProps> = (props) => {
  const { label, name, placeholder, className, setValue, value } = props
  return (
    <StyledTextAreaInput
      {...props}
      className={`f f-direction-column ${className || ''}`}
    >
      {label && (
        <label className="mb-2" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="input f">
        <textarea
          onChange={handleChange(setValue)}
          placeholder={placeholder}
          name={name}
          id={name}
          value={value}
          className="p-3 br-1"
        />
      </div>
    </StyledTextAreaInput>
  )
}
