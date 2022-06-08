const express = require('express')
const carriers = require('./data/carriers')
const orders = require('./data/orders')


const server = express()
const server2 = express()

server.get('/', (req, res) => {
    res.send('Carriers API is running...')
})
server2.get('/', (req, res) => {
    res.send('Shipments API is running...')
})




server.get('/api/carriers', (req, res) => {
    res.json(carriers)
})
server2.get('/api/orders', (req, res) => {
    res.json(orders)
})



server.listen(5000, console.log('Carriers server running on port 5000'))
server2.listen(5001, console.log('Shipments server running on port 5001'))