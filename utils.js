
const SayHi = (name) => {
    console.log(`Hello there ${name}`)
}

module.exports = SayHi



GetCurrency = (number) =>{
    return 'Rs. '+ new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
    }

 module.exports =   GetCurrency 