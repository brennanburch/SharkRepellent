import React, { useState, useEffect } from 'react'

import { Container,Row, Col, Table, Button, Navbar, Form, FormControl } from 'react-bootstrap'
import { LineAxisOutlined } from '@mui/icons-material'
import axios from 'axios'



const CurrentOrders = () => {
  const [orders, setOrders] = useState([])

    useEffect(() => {
      const fetchOrders = async() =>{
      const {data} = await axios.get('/api/orders')

      setOrders(data)
    }
    fetchOrders()
    }, [])
  return (
    <>

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