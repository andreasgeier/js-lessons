'use strict'

// import node module fs (file system)
const fs = require('fs')

// csv record to html
const recordToHTML = record => {
    const fields = record.split(',')

    let html = `
        <h1>${fields[0]}</h1>
        <p>${fields[1]}</p>
        <p>Price: EUR ${fields[3].trim('\r')}</p>`

    if (Number(fields[2]) <= 5) {
        html += `<p>Last items in stock!</p>`
    }

    return html
}

// read file async
fs.readFile('products.csv', 'UTF8', (error, data) => {
    const products = data.split('\n')
    products.shift() // remove header

    const pages = products.filter(row => row !== '').map(recordToHTML)
    pages.forEach(page => console.log(page))
})

console.log('ready')
