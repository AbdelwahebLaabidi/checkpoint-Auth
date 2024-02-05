import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current } from "../Redux/Actions/AuthActions"

const Profil=()=>{

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(current())
    },[])
    const User = useSelector(state => state.AuthReducer.User)
    
    return(
        <div>
                {User && <h1>{User.name}</h1>}
        </div>
    )
}

export default Profil