import React from 'react'
import { Container, Navbar, Nav, Row, Form, FormControl, Col } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
      
    <header><Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
  <Container>
    <Navbar.Brand href="/">Shark Repellent</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className='ml-auto'>
    <Nav.Link href="/orders">Orders</Nav.Link>
    <Nav.Link href="/lanes">Lanes</Nav.Link>
    <Nav.Link href="/carriers">Carriers</Nav.Link>
    <Nav.Link href="/locations">Locations</Nav.Link>

    </Nav>
        
      <Nav className='ms-auto'>
        
        <Nav.Link href="/login"><i className='fas fa-user'></i> Login</Nav.Link>
     
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar></header>
   
  )
}

export default Header