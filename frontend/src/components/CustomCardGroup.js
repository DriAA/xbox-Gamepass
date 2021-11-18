import CustomCard from "./CustomCard"
import  {Row} from 'react-bootstrap'



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
        <Row className="g-4 m-auto">
                {cols}
        </Row>

    )
}

export default CustomCardGroup
