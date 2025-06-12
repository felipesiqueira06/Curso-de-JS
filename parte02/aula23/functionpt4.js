function soma(...valores){
   let tam = valores.length
   let res = 0
   //IN
    for(let i = 0; i < tam; i++){
        res = res + valores[i]
    }
    return res
}

console.log(soma(1,4,7,10)) 



/*function soma(...valores){
   let res = 0
   //OFF 
   for(let v of valores){
        res+= v
    }
    return res
}

console.log(soma(1,4,7,10))*/
