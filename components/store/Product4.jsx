

import { connect } from "react-redux"

import Card from "./Card"

const Product4 = (props) => {
    return (
        <div>
            <h1>Headphones</h1>
            {
                props.prod4.map(headphone => <Card card={headphone} key={headphone.id} />)
            }
        </div>
    )
}

const mapStateToProps = ({store}) =>{
    return {
        prod4: store.prod4
    }
}
export default connect(mapStateToProps, null)(Product4)