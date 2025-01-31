import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <>
    <Navbar sticky="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='me-3 text-white' to="/">Home</Link>
            <Link className='me-3 text-white' to="/about">About Us</Link>
            <Link className='me-3 text-white' to="/hello">Hello</Link>
            <Link className='me-3 text-white' to="/login">Login</Link>
            <Link className='me-3 text-white' to="/dynemic-route">Dynemic Route</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent