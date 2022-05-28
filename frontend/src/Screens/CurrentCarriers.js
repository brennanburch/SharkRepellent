import React from 'react'
import carriers from '../carriers'
import { Container,Row, Col, Table, Button } from 'react-bootstrap'

const CurrentCarriers= () => {
  return (
    <>
    
     
     
    
    <Row className='justify-content-center py-3'>
      <Col lg={9} ><Button  size="sm">
     New Carrier
    </Button>
      <Table striped bordered hover variant="light">
  <thead>
    <tr>
      
      <th>Name</th>
      <th>Location</th>
      <th>Rate</th>
      <th>Status</th>
      <th>Info</th>
    
      
    </tr>
  </thead>
  <tbody>
  {carriers.map((carrier, index) =>(
    <tr data-index= {index}>
       
        <td>
            <p>{carrier.name}</p></td>
            <td>
            <p>{carrier.location}</p></td>
            <td>
            <p>{carrier.rate}</p></td>
            
            <td>
            <p>{carrier.status}</p></td>
            
           
            <td>
            <Button href={`/carrier/${carrier.name}`} variant="primary" size="sm" active>
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

export default CurrentCarriers