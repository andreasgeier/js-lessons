'use strict'

const fs = require('fs')
const validator = require('validator')

// read csv file with book titles + ISBN
const csv = fs.readFileSync('books.csv', 'utf-8')

// create 2d-array from csv
const books = Array.from(csv.split('\n'))
    .map(row => Array.from(row.split(',')))
    .splice(1)

// check ISBN number in books array
const checkISBN = arr => arr
    .filter(subArr => validator.isISBN(subArr[1]) === false)

console.log('Complete list of books:')
console.log(books)
console.log('Entries with false ISBN:')
console.log(checkISBN(books))
