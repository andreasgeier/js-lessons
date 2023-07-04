'use strict'

// import node module fs (file system)
const fs = require('fs')

// read file
const data = fs.readFileSync('products.csv', 'UTF-8')

// csv to array
const productsDirty = data.split('\n')
productsDirty.shift() // remove csv header
const products = productsDirty.map(el => el.trim('\r')) // remove \r (CRLF)

// array to html
const recordToHTML = record => {
    const fields = record.split(',')
    let html = `
        <h1>${fields[0]}</h1>
        <p>${fields[1]}</p>
        <p>Price: EUR ${fields[3]}</p>`
    
    if (Number(fields[2] <= 5)) {
        html += `
        <p>Last items in stock!</p>`
    }

    return html
}

// create html snippets
const pages = products.filter(row => row !== '').map(recordToHTML)

// output
pages.forEach(page => console.log(page))
console.log('ready')
