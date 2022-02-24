const GetCurrency = require('./utils')
const taxCalculation = require('./taxCalculation')
// monthly salary
let monthlySal = 150*1000;
let annualSal = monthlySal*13;
console.log(`
monthly salary : ${GetCurrency(monthlySal)}
Gross annual salary : ${GetCurrency(annualSal)} (including Dashain Bonus)`)

let pfSffValue = (annualSal/3) > 500*1000 ? 500*1000 : (annualSal/3);
annualSal = annualSal - pfSffValue;

console.log(`Saving Money : ${GetCurrency(pfSffValue)}
             Remaining Taxable Salary: ${GetCurrency(annualSal)}
Tax Calculations : `)

let basicSlab = 400*1000;
let slab10 = 100*1000;
let slab20 = 200*1000;
let slab30 = 1300*1000;
let slab36 = 2000*1000;
let sal = annualSal;

let tax1 = taxCalculation(sal, 1, basicSlab);
sal = sal-basicSlab
let tax10 = taxCalculation(sal, 10, slab10);
sal = sal -slab10
let tax20 = taxCalculation(sal, 20, slab20);
sal = sal -slab20
let tax30 = taxCalculation(sal, 30, slab30);
sal = sal -slab30
let tax36 = taxCalculation(sal, 36, slab36);


let totalTax = tax1 + tax10 + tax20 + tax30 + tax36

console.log(`
For annual income : ${GetCurrency(annualSal)}, Total Tax amount: ${GetCurrency(totalTax)}`)
let NetSal = annualSal - totalTax
console.log(`Net annual income : ${GetCurrency(NetSal)}, Monthly Cash in hand: ${GetCurrency(NetSal/13)}`)

let ssfCont = NetSal/1.1
console.log( `After adjustment : ${GetCurrency(ssfCont/12)}`)