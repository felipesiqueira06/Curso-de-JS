let valores = [2, 5, 7, 1, 3]
valores.sort()
console.log(`${valores}`)
/*for( var pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
}*/
for(var pos in valores) {
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
}