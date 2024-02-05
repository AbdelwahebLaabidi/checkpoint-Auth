import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';


const ErrorsAuth=()=>{

    const Autherrors = useSelector(state => state.ErrorReducer)

    return(
        <div>
                {
                    Autherrors.map((el,i,t)=> <Alert key='danger' variant='danger'>
                    {el.msg}
                </Alert>)
                }
        </div>
    )
}

export default ErrorsAuth