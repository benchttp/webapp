import { Card, Text } from 'components'
import { useState, FC } from 'react'
import { FontSizes, FontWeights, FontFamilies } from 'shared/style/constants'
import { Settings } from 'react-feather'
import { StyledCardResult } from './core/cardResult.styles'
import { IProps } from './core/cardResult.types'

export const CardResult: FC<IProps> = ({
  icon,
  number,
  unit,
  text,
  optionsData,
  onChangeOption,
}) => {
  const [optionsDropdownVisible, setOptionsDropdownVisible] = useState(false)
  return (
    <Card>
      <StyledCardResult>
        <div className="card">
          {icon}
          <div className="result-text">
            <Text
              weight={FontWeights.BOLD}
              font={FontFamilies.POPPINS}
              size={FontSizes.LARGE}
            >
              {number} {unit}
            </Text>
            <Text size={FontSizes.SMALL}>{text}</Text>
          </div>
          {optionsData && optionsData.length > 0 && (
            <div className="content-dropdown">
              <div
                onClick={() =>
                  setOptionsDropdownVisible(!optionsDropdownVisible)
                }
                className="toggle-options"
              >
                <Settings width={22} color="#fff" />
              </div>
              {optionsDropdownVisible && (
                <div className="dropdown">
                  {optionsData.map((option, i) => (
                    <div
                      key={i}
                      onClick={() =>
                        onChangeOption && onChangeOption(option.value)
                      }
                      className="dropdown-item"
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {optionsDropdownVisible && (
          <div
            onClick={() => setOptionsDropdownVisible(!optionsDropdownVisible)}
            className="overlay"
          />
        )}
      </StyledCardResult>
    </Card>
  )
}