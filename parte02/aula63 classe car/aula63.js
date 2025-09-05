//Classes Abstratas 

class CarroPadrao{
    constructor(){
        if(constructor === CarroPadrao){
            throw new TypeError("Esta classe nao pode ser instanciada")
        }
        this.rodas = 4
        this.portas = 4
        this.ligado = false
    }

}



class Carro extends CarroPadrao{
    constructor(tipo,estagioTurbo){
        super()
        this.turbo = new Turbo(estagioTurbo)
        if(tipo==1){
            this.velMax = 120
            this.nome = "Fusca"
        } else if(tipo==2){
            this.velMax = 160
            this.nome = "Jeta"
        } else if(tipo==3){
            this.velMax = 200
            this.nome = "Ferrari"
        }
        this.velMax+= this.turbo.pot
    }
    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.rodas)
        console.log(this.portas)
        console.log(this.ligado) 
        console.log("--------------")
    }

}

class Turbo {
    constructor(e){
        if(e==0){
            this.pot = 0
        } else if(e==1){
            this.pot = 50
        }
         else if(e==2){
            this.pot = 75
        } else if(e==3){
            this.pot = 100
        }
    }
}

class CarroEspecial extends Carro {
    constructor(estagioTurbo){
        super(4,estagioTurbo)
        this.tipoinfo = 1
        this.velMax = 300 + this.turbo.pot
        this.nome = "McLaren"

    }

    info(){
        if(this.tipoinfo == 1){
            super.info()
        }else{
            console.log(`Nome : ${this.nome}`)
        console.log(`Vel Maxima : ${this.velMax}`)
        console.log(`Turbo : ${this.turbo.pot}`)
        console.log("--------------")
        }

    }
}


const c1 = new Carro(1,1)
const c2 = new Carro(1,2)
const c3 = new CarroEspecial(3)
//const c4 = new CarroPadrao()

c1.info()
c2.info()
c3.info()
//c4.info()
