import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../Redux/Actions/AuthActions';

const NavAuth=()=>{

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const User = useSelector( state => state.AuthReducer.User)
    const token = localStorage.getItem('token')
    return(
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">NavAuth</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={'/'} >Home</Nav.Link>


                    {
                        token && User ?
                        <>
                            <Nav.Link as={Link} to={'/Profil'}>Profil</Nav.Link>
                            <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}} >Logout</Nav.Link>
                        </>
                        : 
                        <>
                            <Nav.Link as={Link} to={'/Register'}>Register</Nav.Link>
                            <Nav.Link as={Link} to={'/Login'}>Login</Nav.Link>
                        </>
                    }
                    
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavAuth