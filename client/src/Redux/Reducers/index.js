import AuthReducer from "./AuthReducer"
import ErrorReducer from "./ErrorReducer"
import { combineReducers } from "redux"

const RootReducer = combineReducers({AuthReducer, ErrorReducer})


export default RootReducer