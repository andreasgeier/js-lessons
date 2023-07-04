'use strict'

const http = require('http')

const ip = '127.0.0.1'
const port = 8081

const server = http.createServer((req, res) => {
    console.log(req.headers)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n\n' + JSON.stringify(req.headers))
})

server.listen(port, ip, () => {
    console.log(`Server running at http://${ip}:${port}`)
})
