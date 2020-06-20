import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useLocation } from 'react-router';

export const Header = () => {
  const { pathname } = useLocation()

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand href="/">Mulu Fit</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto align-self-end">
          <Nav.Link href="/" active={pathname === "/"}>
            Join Another Class
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
