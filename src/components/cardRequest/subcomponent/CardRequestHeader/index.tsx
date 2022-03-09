import { ExpansionPanelContext } from 'components/ExpansionPanel'
import { Text } from 'components/Text'
import { FC, useContext } from 'react'
import { ChevronDown } from 'react-feather'
import { FontFamilies, FontWeights } from 'shared/style/constants'
import { StyledCardRequestHeader } from './core/cardRequestHeader.styles'
import { IProps } from './core/cardRequestHeader.types'

export const CardRequestHeader: FC<IProps> = (props) => {
  const { index, responseCode, responseSize, responseTime } = props
  const expansionPanelContext = useContext(ExpansionPanelContext)
  const { toggle } = { ...expansionPanelContext }
  return (
    <StyledCardRequestHeader
      {...props}
      onClick={toggle}
      className="f f-jc-space-b"
    >
      <div className="f f-ai-center">
        <Text
          className="mr-5"
          font={FontFamilies.POPPINS}
          weight={FontWeights.BOLD}
        >
          #{index}
        </Text>
        <div className="f f-ai-center mr-4">
          <p className="roundedColorResponse mr-2" />
          <Text>{responseCode}</Text>
        </div>
        <Text className="mr-4">{responseTime} ms</Text>
        <Text>{responseSize} B</Text>
      </div>
      <div className="f f-ai-center">
        <button type="button" className={'rawResponseButton'}>
          See raw response
        </button>
        <ChevronDown className="ml-2" size={16} />
      </div>
      {/* <div className={'wrapper'}>
        <Row>
          <Col>
            <p className="counter">#{index}</p>
          </Col>
          <Col>
            <Row>
              <p className="roundedColorResponse" />
              <p className="responseCode">{responseCode}</p>
            </Row>
          </Col>
          <Col>
            <p className="responseDuration">{responseTime} ms</p>
          </Col>
          <Col>
            <p className="responseDuration">{responseSize} B</p>
          </Col>
          <div className="rawResponseDiv">
            <Col>
              <button type="button" className={'rawResponseButton'}>
                See raw response
              </button>
              <ChevronDown size={16} onClick={toggle} />
            </Col>
          </div>
        </Row>
      </div> */}
    </StyledCardRequestHeader>
  )
}
