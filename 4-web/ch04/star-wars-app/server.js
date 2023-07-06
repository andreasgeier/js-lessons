'use strict'

const express = require('express')
const app = express()

const IP = '127.0.0.1'
const PORT = '8081'

app.use(express.static('public'))

app.get('/planets/:id/', (req, res) => {
    
    // get planet data from public API
    fetch('https://swapi.api.webmasters-akademie.dev/planets/')
        .then(res => res.json())
        .then(data => res.send(data)) // send to client
        .catch(err => console.log(err))
})

// start server at ip:port
app.listen(PORT, IP, () => {
    console.log(`Server is listening at http://${IP}:${PORT}/`)
})
