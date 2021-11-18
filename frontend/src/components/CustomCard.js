import {Image, Col} from 'react-bootstrap'

import styles from './CustomCard.module.css'


function CustomCard(props){
    return (        
        <Col xs sm='6' md='12' xl='3' className={styles.col}>
            <div  className={styles.customCard}>
            <Image className={styles.customCard} src={props.url} fluid />
            </div>
        </Col>
    )
}   

export default CustomCard