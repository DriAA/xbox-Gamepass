import { Col, Image} from 'react-bootstrap'

import './CustomCard.css'


function CustomCard(props){

    return (        
        <Col xs sm='6' md='12' xl='3' className='col'>
            <div className='customCard'>
                <Image className='customImage' src={props.url}/>
            </div>
        </Col>
    )
}   

export default CustomCard