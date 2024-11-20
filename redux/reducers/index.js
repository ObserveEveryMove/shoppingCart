import frameReducer from "./frameReducer"
import storeReducer from "./storeReducer"
import adminReducer from "./adminReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    frame: frameReducer,
    store: storeReducer,
    admin: adminReducer,
   
})

export default rootReducer