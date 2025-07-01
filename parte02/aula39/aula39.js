const idades = [15, 20, 32, 13, 18, 91, 52]

const maior = idades.filter((val,ind,arr)=>{
 if(val >= 18) {
    return val
 }

})

const menor = idades.filter((val,ind,arr)=>{
    if(val<18){
        return val
    }
})

console.log(idades)
console.log(maior)
console.log(menor)