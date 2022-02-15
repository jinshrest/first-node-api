const http = require('http');
const { sajin } = require('./names')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
    res.end(`Welcome to our home page, ${sajin}`)
    }
    else if(req.url === '/about'){
        res.end(`About page, ${sajin}`)
        }
    else {
        res.end(`
        <h1> Oops!!! </h1>
        <p> can't find the page</p>
        <a href="/"> Home </a>`
        )}
})

server.listen(5000)