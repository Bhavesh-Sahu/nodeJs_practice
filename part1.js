const name = require("./name")
const sayHi = require("./func")

const x= require('./mindGrenade')

sayHi(name.alba)
sayHi(name.jhon)

//console.log(name.items[0])

const path = require('path')
//console.log(path.sep)
const filep = path.join('/content','subfolder','test.txt')
//console.log(filep)

const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)
