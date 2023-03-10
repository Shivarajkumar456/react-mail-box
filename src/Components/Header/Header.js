import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import './Header.css';

const Header = ()=> {
    const isLoggedIn = useSelector(state=> state.auth.isLoggedin);
    
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
                <Nav.Link className="h6">
                  Home
                </Nav.Link>
                {isLoggedIn && <Nav.Link className="h6">
                  Logout
                </Nav.Link>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}
export default Header;