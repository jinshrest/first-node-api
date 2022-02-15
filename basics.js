
// commonJs, every file in Node is Module (By default)
const names = require('./names')
const { sajin, ram } = require('./names')
const SayHi = require('./utils')
const data = require('./alternative-flavour')

SayHi('susan')
SayHi(names.ram)
SayHi(names.sajin)

console.log(sajin +'-'+ram)

console.log(data)
