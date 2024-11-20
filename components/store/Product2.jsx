
import { connect } from "react-redux"

import Card from "./Card"
const Product2 = (props) =>{
    return (
        <>        <h1>Plants</h1>
        {
            props.prod2.map(plant=><Card card={plant} key={plant.id}/>)
        }
        </>
    )
}

const mapStateToProps = ({store}) =>{
    return {
        prod2:store.prod2
    }
}

export default connect(mapStateToProps, null)(Product2)