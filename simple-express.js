const express = require('express')
const app = express()
const port = 3000

app.get('/:id([0-9]{5})', (req, res)=>{
    res.send(`Hello World !! ${req.params.id}`)
})

//Other routes here
app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})