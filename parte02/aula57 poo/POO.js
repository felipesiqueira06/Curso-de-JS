class Carros{ // classe pai / base
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel= 0
        this.cor = undefined

    }
    ligar=function(){
        this.ligado = true
    }
     desligar=function(){
        this.ligado = false
    }

    setCor=function(cor){
        this.cor=cor
    }

}

class Militar extends Carros{ // classe filho
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem = blindagem
        this.municao=municao
        this.setCor("verde")

    }
    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }

}





const c2 = new Militar("ANIQUILADOR", 1, 100, 3)
c2.atirar()
c2.atirar()

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Nome: ${c2.cor}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`-------------------`)






//Herança: classe que gera outra classe, tudo que esta na classe pai passa para classe filho