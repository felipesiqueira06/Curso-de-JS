/*let n = 0
 let max = 10 

while(n < max){
    console.log("vsf Sao Paulo " +  n)
    n ++
    if(n > 5){
        break
    }
}
console.log("vsf final") */

let n = 0
let max = 10 

let pares = 0
for(let i = n; i < max; i++){
    console.log("VSF SAO PAULO " + i)
    if(i%2 != 0){
        continue
    }
    pares++
}
console.log("Quantidades de vsf SP pares: " + pares)
