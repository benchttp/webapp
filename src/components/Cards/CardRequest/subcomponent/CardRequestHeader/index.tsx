import { FC, useContext } from 'react'
import { ChevronDown } from 'react-feather'

import { Button, Text } from 'components'
import { ExpansionPanelContext } from 'components/ExpansionPanel'
import {
  ButtonAppearance,
  COLORS,
  Colors,
  FontFamilies,
  FontWeights,
} from 'shared/style/constants'

import { StyledCardRequestHeader } from './core/cardRequestHeader.styles'
import { IProps } from './core/cardRequestHeader.types'

export const CardRequestHeader: FC<IProps> = (props) => {
  const { index, responseCode, responseSize, responseTime } = props
  const expansionPanelContext = useContext(ExpansionPanelContext)
  const { toggle } = { ...expansionPanelContext }
  const backgroundStatus =
    responseCode >= 200 && responseCode <= 310 ? COLORS.green : COLORS.DELETE
  return (
    <StyledCardRequestHeader
      {...props}
      onClick={toggle}
      className="f f-jc-space-b pointer"
      backgroundStatus={backgroundStatus}
    >
      <div className="f f-ai-center grid">
        <Text
          className="mr-5"
          font={FontFamilies.POPPINS}
          weight={FontWeights.BOLD}
        >
          #{index}
        </Text>
        <div className="f f-ai-center column">
          <p className="roundedColorResponse mr-2" />
          <Text>{responseCode}</Text>
        </div>
        <Text className="column">{responseTime} ms</Text>
        <Text className="column">{responseSize} B</Text>
      </div>
      <div className="f f-ai-center">
        <Button
          appearance={ButtonAppearance.OUTLINE}
          mainColor={Colors.WHITE}
          secondaryColor={Colors.BLACK}
          hover={true}
          active={true}
        >
          Raw response
        </Button>
        <ChevronDown className="ml-2" size={16} />
      </div>
    </StyledCardRequestHeader>
  )
}
