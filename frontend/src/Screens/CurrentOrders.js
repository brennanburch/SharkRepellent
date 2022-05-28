import React from 'react'
import orders from '../orders'
import { Container,Row, Col, Table, Button, Navbar, Form, FormControl } from 'react-bootstrap'


const CurrentOrders = () => {
  return (
    <>
     <Navbar bg="dark" variant='dark' expand="lg"  collapseOnSelect>
  <Container>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav " />
    <Navbar.Collapse id="basic-navbar-nav">
    
        <Form className="d-xl-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="w-100"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <i className='fa-solid fa-filter fa-2xl justify-content-lg-around'></i>
            
        
     
    </Navbar.Collapse>
  </Container>
</Navbar>
    <Row className='justify-content-center py-3'>
      <Col lg={9} >
      <Table striped bordered hover variant="light">
  <thead>
    <tr>
      
      <th>Order #</th>
      <th>Origin</th>
      <th>Destination</th>
      <th>Product</th>
      <th>Ship Date</th>
    
      <th>Info</th>
    
      
    </tr>
  </thead>
  <tbody>
  {orders.map((order, index) =>(
    <tr data-index= {index}>
       
        <td>
            <p>{order.orderNumber}</p></td>
            <td>
            <p>{order.origin}</p></td>
            <td>
            <p>{order.destination}</p></td>
            <td>
            <p>{order.product}</p></td>
            <td>
            <p>{order.shipDate}</p></td>
            
           
            <td>
            <Button href={`/shipment/${order.origin}`} className='justify-content-center' variant="primary" size="sm" active>
     More
  </Button>{' '}</td>
            
            </tr>
        ))}
    
  </tbody>
</Table>
</Col> 
    </Row>
    </>
  )
}

export default CurrentOrders