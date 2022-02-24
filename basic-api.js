const http = require('http');
const { sajin } = require('./names')
const port = 5000

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
    res.end(`
    <a href="/"> Home </a>
    <a href="/about"> About </a>
    <div>Welcome to our home page, <b>${sajin}</b></div>`)
    }
    else if(req.url === '/about'){
        res.end(`
        <a href="/"> Home </a>
        <a href="/about"> About </a>
        <div>About page, <b>${sajin}</b></div>`)
        }
    else {
        res.end(`
        <h1> Oops!!! </h1>
        <p> can't find the page</p>
        <a href="/"> Home </a>`
        )}
})

server.listen(port, ()=>{
    console.log(`server Listening on port ${port}`)
})
