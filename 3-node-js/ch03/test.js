'use strict'

// load node.js module
const fs = require('fs')

// create file (or throw error)
fs.writeFile('test.html', error => {
    if (error) console.log('Shit, could not write file :( \n' + error)
})
// delete file (or throw error)
fs.unlink('test.html', error => {
    if (error) console.log('Shit, could not delete file :( \n' + error)
})
