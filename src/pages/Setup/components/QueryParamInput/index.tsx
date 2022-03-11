import { FC, useState } from 'react'
import { Trash2 } from 'react-feather'

import { TextInput } from 'components/Inputs/TextInput'

import { handleDeleteClick } from './core/queryParamInput.helpers'
import { useQueryParamInput } from './core/queryParamInput.hook'
import { IProps } from './core/queryParamInput.types'
import { StyledQueryParamInput } from './core/queryParamsInput.styles'

export const QueryParamInput: FC<IProps> = (props) => {
  const { className, index, setQueryParams, queryParams } = props

  const [key, setKey] = useState<string>('')
  const [value, setValue] = useState<string>('')

  useQueryParamInput({ setQueryParams, key, value, index, queryParams })

  return (
    <StyledQueryParamInput
      className={`f f-jc-space-b f-ai-end mb-3 ${className || ''}`}
    >
      <TextInput
        className="key mr-4"
        name={`query-param-${index}-key`}
        label="Key"
        placeholder="orderBy"
        value={key}
        setValue={setKey}
      />
      <TextInput
        className="value mr-3"
        name={`query-param-${index}-value`}
        label="Value"
        placeholder="asc"
        value={value}
        setValue={setValue}
      />
      <Trash2
        className="mb-2 cursor-p"
        onClick={handleDeleteClick(queryParams, setQueryParams, index)}
      />
    </StyledQueryParamInput>
  )
}
