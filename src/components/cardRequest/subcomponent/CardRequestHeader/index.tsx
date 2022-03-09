import { ExpansionPanelContext } from 'components/ExpansionPanel'
import { FC, useContext } from 'react'
import { ChevronDown, ChevronLeft } from 'react-feather'
import {
  Col,
  Row,
  StyledCardRequestHeader,
} from './core/cardRequestHeader.styles'
import { IProps } from './core/cardRequestHeader.types'

export const CardRequestHeader: FC<IProps> = (props) => {
  const { index, responseCode, responseSize, responseTime } = props
  const expansionPanelContext = useContext(ExpansionPanelContext)
  const { toggle } = { ...expansionPanelContext }
  return (
    <StyledCardRequestHeader>
      <div className={'wrapper'}>
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
      </div>
    </StyledCardRequestHeader>
  )
}
