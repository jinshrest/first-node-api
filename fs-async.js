const {readFile, writeFile} = require('fs')
let first, second

console.log('start...')       
    
readFile('./content/subfolder/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    first = result;
    readFile('./content/subfolder/second.txt','utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        
        second=result
        writeFile('./content/result-async.txt',
            `Here is the async result : ${first}, ${second}`
            ,(err, result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('Done writing to the file')
            })
    })
})

console.log(`${first}`)
console.log('the file is saved async ...')                
