let salary = 200*1000;
let basicSlab = 400*1000;
let slab10 = 500*1000;
let slab20 = 700*1000;
let slab30 = 2000*1000;
let slab36 = 2000*1000;

let perAnnumSalary = salary * 12 + salary;
let basic =perAnnumSalary-basicSlab
let tax1 = basic < basicSlab ? basic*0.01 : basicSlab*0.01

let s10 = perAnnumSalary - slab10
let d10 = slab10-basicSlab
let tax10 = s10 < d10 ? s10*0.1 : d10*0.1

let s20 = perAnnumSalary - slab20
let d20 = slab20-slab10
let tax20 = s20 < d20 ? s20*0.2 : d20*0.2

let s30 = perAnnumSalary - slab30
let d30 = slab30-slab20
let tax30 = s30 < d30 ? s30*0.3 : d30*0.3

let s36 = perAnnumSalary - slab30
let d36 = slab36 - slab30
let tax36 = s36 < d36 ? s36*0.36 : d36*0.36

console.log(`yearly taxable income : ${perAnnumSalary}
             1% TAX  :   ${tax1}     for ${basicSlab}                     
             10% TAX :   ${tax10}   for ${slab10 - basicSlab}                     
             20% TAX :   ${tax20}   for ${slab20 - slab10}                  
             30% TAX :   ${tax30}   for ${slab30 - slab20}                  
             36% TAX :   ${tax36}   for above ${slab30}                  
`)