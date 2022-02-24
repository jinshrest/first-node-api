console.log('first')
console.time()
setTimeout(()=>{
    console.log('1. second task')
}, 0)
console.timeEnd()
console.log('last')


setInterval(()=>{
    console.log('2. second task')
}, 1000)

console.log('final')