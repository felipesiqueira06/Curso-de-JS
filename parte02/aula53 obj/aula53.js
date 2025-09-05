class carros{
    constructor(nome,tipo){
        this.nome = nome
        if(tipo == 1){
            this.tipo = "Esportivo"
            this.velmax = 300
        }else if(tipo == 2){
            this.tipo = "Casual"
            this.velmax = 150
        }else if(tipo == 3){
            this.tipo = "Militar"
            this.velmax = 450
        }
    }

    getInfo(){
        return[this.nome,this.tipo,this.velmax]

    }

    setNome(nome){
        this.nome = nome
    }
    setTipo(tipo){
        this.tipo = tipo
    }
    setVel(velmax){
        this.velmax = velmax
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade máxima: ${this.velmax}`)
        console.log("-------------")
    }
    
}

let c1 = new carros("RASGA PISTA", 1)
let c2 = new carros("Explode folgado",3)
let c3 = new carros("Turista",2)

console.log(c1.getInfo())
c1.setVel(320)
console.log(c1.info())


