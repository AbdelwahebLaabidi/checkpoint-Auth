import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"

const initialState = {
    User : {},
    errors : []
}

const AuthReducer=(state=initialState, action)=>{
    switch (action.type) {

        case FAIL : return {...state, errors : action.payload, User : null}

        case REGISTER :
            localStorage.setItem('token', action.payload.token)
            return {...state, User : action.payload.newUser, errors : null}

            case LOGIN :
                localStorage.setItem('token', action.payload.token)  
                return {...state, User : action.payload.found}

            case LOGOUT : 
            localStorage.removeItem('token')
            return {...state, User : null, errors : null}

            case CURRENT : return {...state, User : action.payload}
        default: return state
    }
}

export default AuthReducer