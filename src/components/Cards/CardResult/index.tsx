import { Card, Text } from 'components'
import { useState, FC, createElement } from 'react'
import { Settings } from 'react-feather'
import {
  FontSizes,
  FontWeights,
  FontFamilies,
  ICONS,
  COLORS,
} from 'shared/style/constants'
import { StyledCardResult } from './core/cardResult.styles'
import { IProps } from './core/cardResult.types'

export const CardResult: FC<IProps> = (props) => {
  const { icon, iconColor, result, unit, text, optionsData, onChangeOption } =
    props

  const [optionsDropdownVisible, setOptionsDropdownVisible] = useState(false)

  return (
    <StyledCardResult {...props}>
      <Card className="f card">
        <div className="icon p-3 f f-center">
          {createElement(ICONS[icon], {
            color: COLORS[iconColor],
            width: 32,
            height: 32,
          })}
        </div>
        <div className="text f f-direction-column f-jc-center ml-2">
          <Text
            weight={FontWeights.BOLD}
            font={FontFamilies.POPPINS}
            size={FontSizes.LARGE}
          >
            {result} {unit}
          </Text>
          <Text size={FontSizes.SMALL}>{text}</Text>
        </div>
        {optionsData && optionsData.length > 0 && (
          <div className="content-dropdown">
            <div
              onClick={() => setOptionsDropdownVisible(!optionsDropdownVisible)}
              className="toggle-options"
            >
              <Settings width={18} color="#fff" />
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
      </Card>

      {optionsDropdownVisible && (
        <div
          onClick={() => setOptionsDropdownVisible(!optionsDropdownVisible)}
          className="overlay"
        />
      )}
    </StyledCardResult>
  )
}
