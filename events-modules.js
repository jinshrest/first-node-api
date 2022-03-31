const EventEmitter = require('events')

const customEmitter = new EventEmitter()


customEmitter.on('response', ()=>{
    console.log(`another data received`)
})


customEmitter.on('response', (name, id)=>{
    console.log(`data received ${name} with ${id}`)
})

customEmitter.emit(`response`, 'sajin', 34)