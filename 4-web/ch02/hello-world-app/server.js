'use strict'

const express = require('express')
const app = express()

const IP = '127.0.0.1'
const PORT = '8081'

// homepage (no parameter provided)
app.use(express.static('public'))

// internal route with URL parameters (internal API)
app.get('/planet/:planetName/', (req, res) => {
    
    // get planetName from route values
    const planetName = req.params.planetName

    // get planet data from public API
    fetch('https://solar.api.webmasters-akademie.dev/bodies/')
        .then(res => res.json())
        .then(res => res.find(item => item.id === planetName))
        .then(data => res.send(data)) // send to client
        .catch(err => console.log(err))
})

// app is listening at local ip:port
app.listen(PORT, IP, () => {
    console.log(`Server is listening at http://${IP}:${PORT}/`)
})
