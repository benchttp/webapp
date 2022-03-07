import { FC, useState } from 'react';
import { AiOutlineDown} from '@react-icons/all-files/ai/AiOutlineDown';
import { AiOutlineUp } from '@react-icons/all-files/ai/AiOutlineUp';
import { Col, Row, StyledCardRequest } from './typescript/cardRequest.styles';

interface ICardRequestProps {
  
  onClick?: () => void

}


const cardRequest: FC<ICardRequestProps> = ({ ...props }) => {
  const [counter, setCounter] = useState<number>(1);
  const [responseCode, setResponseCode] = useState<number>(200)
  const [responseDuration, setResponseDuration] = useState<number>(1152)
  const [param,setParam] = useState<number>(1249)
  const [RawResponseActive, setRawResponseActive] = useState<boolean>(false)
  

  function openRawResponse() {
    setRawResponseActive(!RawResponseActive)
    console.log(RawResponseActive)
  }  
  return (
    <StyledCardRequest>
      <div className={'wrapper'}>
      <Row>    
         <Col>
            <p className="counter">#{counter}</p>
          </Col>
          <Col>
          <Row>
           <p className='roundedColorResponse'/>
           <p className='responseCode'>{responseCode}</p>
           </Row>
         </Col>
          <Col>
            <p className='responseDuration'>{responseDuration} ms</p>
         </Col>
         <Col>
           <p className='responseDuration'>{param} B</p>
         </Col>
         <div className='rawResponseDiv'>

         <Col >
          <button
          type="button"
          className={'rawResponseButton'}
          onClick={() => openRawResponse()}
          {...props}
        >
          See raw response
          </button>
        
          {RawResponseActive ? <AiOutlineUp/>:<AiOutlineDown/>}
         </Col>
         </div>

      </Row>
      
      </div>
    </StyledCardRequest>
  )
}

export default cardRequest
