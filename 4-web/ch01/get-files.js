'use strict'

const fs = require('fs')

let getFileContent = name =>
    new Promise((resolve, reject) =>
        fs.readFile(name, 'UTF8', (error, content) => {
            if (error) {
                reject('Could not read file: ' + name)
            } else {
                resolve(content)
            }
        })
    )

Promise.all([
    getFileContent('./res/hello1.txt'),
    getFileContent('./res/hello2.txt'),
    getFileContent('./res/hello3.txt'),
    getFileContent('./res/hello4.txt'),
    getFileContent('./res/hello5.txt'),
    getFileContent('./res/hello6.txt'),
])
    .then(contents => contents.forEach(content => console.log(content)))
    .catch(error => console.log(error))
