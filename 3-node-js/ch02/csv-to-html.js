'use strict'

// work in progress ...





// import node module fs (file system)
const fs = require('fs')

// read csv file async and transform into array
fs.readFile('products.csv', 'UTF8', (error, data) => {
    console.log('_____CSV (string)')
    console.log(data) // => string
    const output1 = data.split('\n') // => array with rows as strings
    console.log('_____OUTPUT1 (array with strings)')
    console.log(output1)

    const headerRow = output1.shift() // => removes header, stores in output2
    console.log('_____headerRow')
    console.log(headerRow)
    console.log('_____OUTPUT1 (removed header row)')
    console.log(output1) // => output1 without header row
    
    const output3 = output1.filter(row => row !== '')
    console.log('_____OUTPUT3 (removed empty rows)')
    console.log(output3) // => removes empty rows

    const output4 = output3.map(row => row.trim('\r'))
    console.log('_____OUTPUT4 (removed line endings \\r')
    console.log(output4) // => removes \r from CRLF line ending format
    
    const output5 = output4.map(row => row.split(','))
    console.log('_____OUTPUT5 (2d array)')
    console.log(output5) // => 2d array

    const headerArr = headerRow.split(',').map(el => el.trim())
    console.log(headerArr)
})



/*
fs.readFile('products.csv', 'UTF8', (error, data) => {
    const products = data.split('\n')
    products.shift() // remove header

    const pages = products.filter(row => row !== '').map(recordToHTML)
    pages.forEach(page => console.log(page))
})
*/