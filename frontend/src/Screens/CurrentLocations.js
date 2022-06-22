import React from 'react'
import locations from '../locations'
import { Container,Row, Col, Table, Button } from 'react-bootstrap'

const CurrentLocations= () => {
  return (
    <>
    
    <Row className='justify-content-center py-3'>
      <Col lg={9} > 
      <h3>Locations</h3>
      <Button size="sm">
     New Location
    </Button>
      <Table striped bordered hover variant="light">
  <thead>
    <tr>
      
      <th>Name</th>
      <th>City</th>
      <th>State</th>
      <th>Zip</th>
      <th>Special Instructions</th>
    
      
    </tr>
  </thead>
  <tbody>
  {locations.map((location, index) =>(
    <tr data-index= {index}>
       
        <td>
            <p>{location.name}</p></td>
            <td>
            <p>{location.city}</p></td>
            <td>
            <p>{location.state}</p></td>
            
            <td>
            <p>{location.zip}</p></td>
            <td>
            <p>{location.specialInstructions}</p></td>
            
           
            
            
            </tr>
        ))}
    
  </tbody>
  </Table>
</Col> 
    </Row>
      
    </>
  )
}

export default CurrentLocations