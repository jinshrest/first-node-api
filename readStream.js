var http = require('http')
var fs = require('fs')

http.createServer(function(res, req){
    const fileStream = fs.createReadStream('./content/subfolder/big.txt', {
                                                highWaterMArk : 9,
                                                encoding: 'utf-8'});

    fileStream.on('data', (res)=>{
            console.log(res)
        })
        
    fileStream.on('open', ()=>{
        fileStream.pipe()
    })

    fileStream.on('error', (err)=>{
        res.end(err)
    })
}).listen(5000)