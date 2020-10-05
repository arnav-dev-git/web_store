import React from "react";
// import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="navbar-dark bg-primary" collapseOnSelect>
        <Container>
          <LinkContainer to="/" exact>
            <Navbar.Brand>Electron Store</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart" exact>
                <Nav.Link className="mr-2">
                  <i className="fas fa-shopping-cart mr-2"></i>
                  Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login" exact>
                <Nav.Link>
                  <i className="fas fa-user mr-2"></i>Log In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
