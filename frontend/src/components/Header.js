import React from 'react'

import { Container, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

import { BrowserRouter as  Route, Switch} from 'react-router-dom'

import CurrentCarriers from '../Screens/CurrentCarriers.js';
import CarrierDetails from '../Screens/CarrierDetails';
import CurrentLocations from '../Screens/CurrentLocations';
import HomeScreen from '../Screens/HomeScreen';





import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
      
    <header><Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
  <Container>
    <Navbar.Brand href="/">Shark Repellent</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

    
            
 


        
      <Nav className='ms-auto'>
        
       
        <Nav.Link href="/currentcarriers">Carriers</Nav.Link>
        <Nav.Link href="/currentlocations">Locations</Nav.Link>
        <Nav.Link href="/login"><i className='fas fa-user'></i> Login</Nav.Link>

        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar></header>
   
  )
}

export default Header