const express = require('express')
const carriers = require('./data/carriers')


const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})





app.get('/api/carriers', (req, res) => {
    res.json(carriers)
})



app.listen(5001, console.log('server running on port 5001'))