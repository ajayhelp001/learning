import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const NavbarComponent = () => {
  const navigate = useNavigate()

  const handalLogout = () =>{
    localStorage.removeItem('login')
    navigate('/login')
  }
  return (
    <>
    <Navbar sticky="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={({isActive}) => (isActive ? 'text-warning me-3' : 'text-white me-3')} to="/">Home</NavLink>
            <NavLink className={({isActive}) => (isActive ? 'text-warning me-3' : 'text-white me-3')} to="/about">About Us</NavLink>
            <NavLink className={({isActive}) => (isActive ? 'text-warning me-3' : 'text-white me-3')} to="/hello">Hello</NavLink>
            <NavLink className={({isActive}) => (isActive ? 'text-warning me-3' : 'text-white me-3')} to="/login">Login</NavLink>
            <NavLink className={({isActive}) => (isActive ? 'text-warning me-3' : 'text-white me-3')} to="/dynemic-route">Dynemic Route</NavLink>
          </Nav>
          <Nav className="ms-auto">
            <NavLink className="me-3" to="/">Home</NavLink>
            <NavLink className="me-3" to="/about">About Us</NavLink>
            <NavLink className="me-3" to="/contact">Contact Us</NavLink>
            <NavLink className="me-3" to="/company">Compnay</NavLink>
            <NavLink className="me-3" to="/dynemic-route">Dynemic Route</NavLink>
            <NavLink className="me-3" to="/search">Search</NavLink>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">Dropdown Button</Dropdown.Toggle>
              <Dropdown.Menu>
                <NavLink className={({isActive}) => (isActive ? 'dropdown-item bg-black' : 'dropdown-item')} to="/admin-panel">Go To Admin</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'dropdown-item bg-black' : 'dropdown-item')} to="/login">Login</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'dropdown-item bg-black' : 'dropdown-item')} onClick={handalLogout} to="/login">Logout</NavLink>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent