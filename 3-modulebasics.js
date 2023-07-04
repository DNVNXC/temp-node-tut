const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-altflavor')

console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

require('./7-mindgrenade')
