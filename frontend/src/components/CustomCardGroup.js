import CustomCard from "./CustomCard"
import  {Container, Row} from 'react-bootstrap'



function CustomCardGroup(props){
    const cols = [];
    if( props.gameDetails !== undefined){
        for(let item of  props.gameDetails){
            const imageArr = item.LocalizedProperties[0].Images
            const Index = imageArr.map(function(e) { return e.ImagePurpose; }).indexOf('BoxArt')
            const imageUrl = imageArr[Index].Uri
            cols.push(<CustomCard url={imageUrl}></CustomCard>)
        }        
    }


    return(
    <Container>
        <Row xs={1}  sm={2} md={2} lg={3} xl={4} className="g-4">
            {cols}
        </Row>
    </Container>

    )
}

export default CustomCardGroup
