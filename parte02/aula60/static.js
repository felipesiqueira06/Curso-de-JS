class Npc{
    constructor(energia){
        this.energia = energia
        this.alerta = false

    }

    info=function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(this.alerta?"Sim":"Não")}`)
    }
}

const npc1 =new Npc (100)
const npc2 =new Npc (80)

