let num = [, 4, 6, 8, 1, 9]
num.push(2)
num.sort()
console.log (` ${num}`)
console.log ( `O vetor tem ${num.length} posições`)
console.log (`A primeira posição do vetor é ${num[0]}`)
pos = num.indexOf (8) 
if( pos == -1) {
    console.log(`Valor não encontrado`)
} else{
    
    console.log(`O valor 8 está na posição ${pos}`)
}
