import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <strong>{"trackerc".toUpperCase()}</strong>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Register" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/registerperson">
                  Register a person
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Register a city
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Report" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  City report
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Person report
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#deets">Sign out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
