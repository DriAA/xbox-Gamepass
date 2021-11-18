import {Col, Image} from 'react-bootstrap'

import styles from './CustomCard.module.css'


function CustomCard(props){
    return (
        
        <Col className='m-0 p-2'>
            
            <Image className={styles.customCard}  src={props.url}  />
        </Col>
    )
}   

export default CustomCard