'use strict'

// get required npm packages
const loopify = require('tmp-loopify')

// npm from Sana
const ownnpm = require('ownnpm15061994')

// use it
console.log(loopify.times(3, () => Math.random()))
console.log(loopify.range(0, 11))

console.log(ownnpm.area(5))
console.log(ownnpm.peri(5))
