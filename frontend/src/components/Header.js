import React from 'react'
import { Container, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import OrderDetails from '../Screens/OrderDetails.js';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import CurrentOrders from '../Screens/CurrentOrders.js';
import CurrentCarriers from '../Screens/CurrentCarriers.js';
import CarrierDetails from '../Screens/CarrierDetails';
import CurrentLocations from '../Screens/CurrentLocations';
import HomeScreen from '../Screens/HomeScreen';
import "../side_bar.css";

import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
      
    <header><Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
  <Container>
    <Navbar.Brand href="/">Shark Repellent</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Form className="d-lg-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="w-100"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <i className='fa-solid fa-filter fa-2xl justify-content-lg-around'></i>
 
        
      <Nav className='ms-auto'>
        
        <Nav.Link href="/login"><i className='fas fa-user'></i> Login</Nav.Link>
     
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div className="d-flex min-vh-100">
            <div id="sidebar" className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
              <div id="sidebar-wrapper" className="min-vh-100">
                <ul className="list-unstyled components">
                
                <Nav.Link href="/orders">Orders</Nav.Link>
    <Nav.Link href="/lanes">Lanes</Nav.Link>
    <Nav.Link href="/carriers">Carriers</Nav.Link>
    <Nav.Link href="/locations">Locations</Nav.Link>
      
                </ul>
              </div>
            </div>
            <br/>
            <Switch>
       <Route path='/' component={HomeScreen} exact/>
       <Route path='/orders' component={CurrentOrders} exact/>
       <Route path='/shipment/:id' component={OrderDetails} />
       <Route path='/carriers' component={CurrentCarriers} exact/>
       <Route path='/carrier/:name' component={CarrierDetails} />
       <Route path='/locations' component={CurrentLocations} exact/>
       
       

       </Switch>
            </div>
</header>
   
  )
}

export default Header