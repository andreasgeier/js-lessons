'use strict'

const moment = require('moment')

// Welches Datum ist nächster Samstag?
const answer = moment().day('Saturday').format('DD.MM.YYYY')

console.log(answer)

// Weitere Abfragen mit moment
console.log('Today is: ' + moment().format('dddd'))
console.log('Current date and time is: ' + moment().format())
console.log('This year is: ' + moment().format('YYYY'))
