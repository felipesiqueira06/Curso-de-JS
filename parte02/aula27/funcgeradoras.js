/* function*  cores(){
yield 'Vermelho'
yield 'Verde'
yield 'Azul'
}
const itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value) */

/*function* perguntas(){
    const nome = yield 'Qual seu nome ?'
    const esporte = yield 'Qual seu esporte fovarito ?'
    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
}

const itp= perguntas()
console.log(itp.next().value)
console.log(itp.next('Felipe').value)
console.log(itp.next('Futebol').value) */

function* contador () {
    let i = 0
    while(true){
        yield i++
    }
}

const itc=contador()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

/*for(let i = 0; i <10; i++){
console.log(itc.next().value)
} */
