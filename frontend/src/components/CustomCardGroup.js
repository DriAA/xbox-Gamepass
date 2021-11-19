import CustomCard from "./CustomCard"
import  {Row} from 'react-bootstrap'


function CustomCardGroup(props){
    const cols = [];
    console.log(props.gameDetails)
    if( props.gameDetails !== undefined){
        for(let item of  props.gameDetails){
            const imageArr = item.LocalizedProperties[0].Images
            const Index = imageArr.map(function(e) { return e.ImagePurpose; }).indexOf('Poster')
            const imageUrl = imageArr[Index].Uri

            const price = item.DisplaySkuAvailabilities[0].Availabilities[0].OrderManagementData.Price.MSRP
            const Name = item.LocalizedProperties[0].ProductTitle
            console.log('Name: ', Name)
            console.log('Price: ', price)
            cols.push(<CustomCard url={imageUrl}></CustomCard>)
        }        
    }


    return(
        <Row className="g-4 m-auto cardGroup">
                {cols}
        </Row>

    )
}

export default CustomCardGroup
