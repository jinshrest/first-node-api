taxCalculation = (sal, tax, slab)=>{
    if(sal<0) return 0
taxPer = tax/100
diff = sal - slab
taxVal= (diff>0) ? slab*taxPer : (sal)*taxPer

console.log(`For ${GetCurrency((diff>0)?slab:sal)} : Tax ${tax}% => ${GetCurrency((taxVal<0) ? 0 : taxVal)} `)
//  console.log(`Remaining salary : ${GetCurrency(sal)}
//  `)

return (taxVal<0) ? 0 : taxVal
}

module.exports = taxCalculation