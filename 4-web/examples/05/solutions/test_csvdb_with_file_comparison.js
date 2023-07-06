'use strict'

const fs = require('fs')
const csvdb = require('./csvdb.js')

// test function, exits with error code '1' if a test fails
const assert = (a, b) => {
    if (a !== b) {
        console.log(`test failed: "${a}"`)
        process.exit(1)
    }
}

// load products from csv file into variable 'products' in script csvdb.js
csvdb.loadProductsFromFile()

// check that all 8 products have been copied successfully
assert(8, csvdb.getProductCodes().length)

// add 2 test products
csvdb.insertProduct({
    code: 'TEST0815',
    shortdesc: 'test product',
    tagline: 'yo',
    quantity: '10',
    price: '9.90',
})
csvdb.insertProduct({
    code: 'TEST0816',
    shortdesc: 'another test',
    tagline: 'yo',
    quantity: '1',
    price: '9.90',
})

// check that 10 products exist now
assert(10, csvdb.getProductCodes().length)

// check that warning based on quantity works as expected
assert(false, csvdb.getProductByCode('TEST0815').stockwarn)
assert(true, csvdb.getProductByCode('TEST0816').stockwarn)

// delete a test product 'TEST0815'
csvdb.deleteProduct('TEST0815')

// update test product 'TEST0816'
csvdb.updateProduct({
    code: 'TEST0816',
    shortdesc: 'another test',
    tagline: 'yo',
    quantity: '1',
    price: '19.90',
})

// check that price of test product updated successfully
assert('19.90', csvdb.getProductByCode('TEST0816').price)

// delete test product
csvdb.deleteProduct('TEST0816')

// check that original state with 8 products has been restored
assert(8, csvdb.getProductCodes().length)

// save data from variable 'products' back to csv file
csvdb.saveProductsToFile()

// check if database is still equal to backup file after testing
let newFile = fs.readFileSync('products.csv', 'UTF8')
let oldFile = fs.readFileSync('products.csv.bak', 'UTF8')

if (oldFile !== newFile) {
    console.log(`test failed: "files differ"`)
    process.exit(1)
}

// log success message
console.log('all tests passed')
