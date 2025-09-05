class Npc{
    static alerta = false
    constructor(energia){
        this.energia = energia
    }

    info=function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta?"Sim":"Não")}`)
        console.log(`-----------------`)
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(50)
const npc3 = new Npc(30)

Npc.alerta = true

npc1.info()
npc2.info()
npc3.info()

//static o membro pertence a classe nesse caso ao NPC nao as suas instançeas como npc1,npc2,npc3