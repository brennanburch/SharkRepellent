import React from 'react'
import { Link } from 'react-router-dom'
import carriers from '../carriers'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'



  const CarrierDetails =({ match }) =>{
    const carrier = carriers.find((p) => p.name === match.params.name)
  
  return <>
  <Row className='justify-content-center py-3'>

  <Col lg={6}>
  <a href="/carriers"><i class="fa-solid fa-arrow-left">Go Back</i> </a>
  <h3 className='py-3'>{carrier.name}</h3>
  
    
        <Row className='py-3'>
            <Col className='md-6'> Location: </Col>
            <Col className='md-6'>{carrier.location}</Col>
  </Row>
  <Row className='py-3'>
            <Col className='md-6'> Rate: </Col>
            <Col className='md-6'>{carrier.rate}</Col>
  </Row>
  <Row className='py-3'>
            <Col className='md-6'> Price/Service Cost: </Col>
            <Col className='md-6'>{carrier.priceServiceCost}</Col>
  </Row>
  <Row className='py-3'>
            <Col className='md-6'>Completed Orders:  </Col>
            <Col className='md-6'>{carrier.completedOrders}</Col>
  </Row>
  <Row className='py-3'>
            <Col className='md-6'>For Quotes:  </Col>
            <Col className='md-6'>{carrier.forQuotes}</Col>
  </Row>
  <Row className='py-3'>
            <Col className='md-6'>For Tenders:  </Col>
            <Col className='md-6'>{carrier.forTenders}</Col>
  </Row>
 
  </Col>
  <Col lg={3}>
   Documents
  </Col>
  </Row>
  </>
}

export default CarrierDetails