const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/subfolder/first.txt', 'utf8')
const second = readFileSync('./content/subfolder/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt',
                 `Here is the sync result : ${first}, ${second}`,
                 {flag: 'a'})

 console.log('the file is saved sync...')   
 
 for(let i =0; i<10000; i++){
    writeFileSync('./content/subfolder/big.txt',
    `counter : ${i}\n`,
    {flag: 'a'})

 }