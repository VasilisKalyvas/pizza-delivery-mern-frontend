import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Button}  from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <>
    <Navbar bg="light" expand="lg" className='shadow-lg p-4 mb-5 bg-white rounded'>
        <Container>
            <Navbar.Brand><Link to="/">Foodie</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto space-between">
            {currentUser && currentUser.isAdmin ?  ( <Link className='mt-2' to="/admin">Admin</Link>) : null}
                {currentUser ? 
                (
                  <>
                    <NavDropdown title={currentUser.name}>
                      <NavDropdown.Item><Link to='/profile'>Profile</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to='/orders'>Orders</Link></NavDropdown.Item>
                      <NavDropdown.Item><Button className='bntLogout' onClick={() => {
                          dispatch(logoutUser());
                        }}>Logout</Button></NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : 
                (<>
                    <Link to="/login" className='mt-2'>Login</Link>
                  </>
                )}
               <Link className='mt-2' to="/cart"><FaShoppingCart style={{fontSize: '30px'}}/> {cartState.cartItems.length}</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  )
}

export default Header