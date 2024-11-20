
import { connect } from "react-redux"

import Card from "./Card"


const Product1 = (props) => {
    return (
        <div>
            <h1>Cats</h1>
            {
                props.prod1.map(animal => <Card card={animal} key={animal.id} />)
            }
        </div>
    )
}

const mapStateToProps = ({store}) =>{
    return {
     prod1:store.prod1,
     
    }
 }
 
 export default connect(mapStateToProps,null)(Product1)