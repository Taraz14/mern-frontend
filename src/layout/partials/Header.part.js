import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();

  const logMeOut = () => {
    history.push("/");
  };
  return (
    <Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand href="/dashboard">D-Mern</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/dashboard">
              Home
            </Link>
            <Link className="nav-link" to="/tiket-list">
              Tickets
            </Link>
            <Link className="nav-link" onClick={logMeOut}>
              Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
