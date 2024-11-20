
import { connect } from "react-redux"

import Card from "./Card"

const Product3 = (props) =>{
    return (
        <>
        <h1>Rocks</h1>
        { 
        props.prod3.map(rock=><Card card={rock} key={rock.id}/>)
        }
        </>
        
    )
}

const mapStateToProps = ({store}) =>{
    return {
        prod3: store.prod3
    }
}
export default connect(mapStateToProps, null)(Product3)