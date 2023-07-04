'use strict'

const fs = require('fs')
const zlib = require('zlib')
const gzipCompressor = zlib.createGzip()

// read file
const file = fs.readFileSync('products.html')

// write file
fs.writeFileSync('products.html.gz', zlib.gzipSync(file))
