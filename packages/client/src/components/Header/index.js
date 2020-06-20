import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useLocation } from 'react-router'

export const Header = () => {
  const { pathname } = useLocation()

  const isHome = pathname === '/'

  return (
    <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">Mulu Fit</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link href="/" active={isHome} disabled={isHome}>
              Join Another Class
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
