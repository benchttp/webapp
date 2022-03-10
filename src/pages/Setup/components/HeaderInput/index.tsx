import { FC, useState } from 'react'
import { TextInput } from '../../../../components/Inputs/TextInput'
import { StyledHeaderInput } from './core/headerInput.styles'
import { IHeaderValue, IProps } from './core/headerInput.types'
import { HeaderInputValue } from './components/HeaderInputValue'
import { DEFAULT_HEADER_VALUES } from './core/headerInput.constants'
import { useHeaderInput } from './core/headerInput.hook'

export const HeaderInput: FC<IProps> = (props) => {
  const { index, className, headers, setHeaders } = props
  const [key, setKey] = useState('')
  const [values, setValues] = useState<IHeaderValue[]>(DEFAULT_HEADER_VALUES)

  useHeaderInput({ headers, setHeaders, key, index, values })

  return (
    <StyledHeaderInput
      {...props}
      className={`f f-jc-space-b f-ai-start ${className || ''}`}
    >
      <TextInput
        className="key mr-4"
        name={`header-${index}-key`}
        label="Key"
        placeholder="Content-type"
        value={key}
        setValue={setKey}
      />
      <div className="values f f-direction-column f-jc-end">
        {values.map((value, valueIndex) => (
          <HeaderInputValue
            key={value.uuid}
            headerIndex={index}
            index={valueIndex}
            values={values}
            setValues={setValues}
            className={`${values.length > 1 ? 'mb-3' : ''}`}
          />
        ))}
      </div>
    </StyledHeaderInput>
  )
}
