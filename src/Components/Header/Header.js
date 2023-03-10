import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/Auth";
import { useNavigate } from "react-router-dom";
import './Header.css';

const Header = ()=> {
    const isLoggedIn = useSelector(state=> state.auth.isLoggedin);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = (event)=> {
      event.preventDefault();
      dispatch(authActions.logout());
      alert('logout successfully');
      navigate('/');
    }
    
  return (
    <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="mb-5 p-3 fixed-top"
        >
          <Container>
            <Navbar.Brand>Mail-Box</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className="h6"><NavLink to="/home" className='navbar-link'>
                  Home
                </NavLink></Nav.Link>
                {isLoggedIn && <Nav.Link className="h6"><NavLink to="/compose" className='navbar-link'>
                  Compose
                </NavLink></Nav.Link>}
                {isLoggedIn && <Nav.Link className="h6"><NavLink to="/inbox" className='navbar-link'>
                  Inbox
                </NavLink></Nav.Link>}
                {isLoggedIn && <Nav.Link className="h6"><NavLink onClick={logoutHandler} to="/" className='navbar-link'>
                  Logout
                </NavLink></Nav.Link>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}
export default Header;