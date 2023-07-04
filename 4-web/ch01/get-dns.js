'use strict'

const util = require('util')
const dns = require('dns')

const url = 'www.wikipedia.de'
const IP_V4 = 4 // IP protocol version 4
const IP_V6 = 6 // IP protocol version 6

const getIPv4 = util.promisify(dns.lookup)
const getIPv6 = util.promisify(dns.lookup)

console.log('IPv4 and IPv6 requests of URL: ' + url)

getIPv4(url, IP_V4)
    .then(result => console.log('IPv4 address: ' + result.address))
    .catch(error => console.log('Couldn\'t lookup IP, check URL naming.'))

getIPv6(url, IP_V6)
    .then(result => console.log('IPv6 address: ' + result.address))
    .catch(error => console.log('Couldn\'t lookup IP, check URL naming.'))
