import React from 'react'
import { Link } from 'react-router-dom'
import orders from '../orders'
import { Row, Col } from 'react-bootstrap'



  const OrderDetails =({ match }) =>{
    const order = orders.find((p) => p._id === match.params.orderNumber)
  
  return <>
   
  <a href="/orders"><i class="fa-solid fa-arrow-left">Go Back</i></a>
  <Row>
    <Col md={6}>
  {order.orderNumber}
  </Col>
  <Col md={3}>
    some other stuff
  </Col>
  </Row>
  </>
}

export default OrderDetails