const valores = [1,4,7,11,3]

const it_valores = valores [Symbol.iterator]()

console.log(valores)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)


