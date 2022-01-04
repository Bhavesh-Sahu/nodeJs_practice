const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt',{encoding:'utf8'})
const second = readFileSync('./content/second.txt',{encoding:'utf8'})

writeFileSync('./content/resultSync.txt',`Here is the combined result file ${first}  ${second}`)
console.log(first,second)
