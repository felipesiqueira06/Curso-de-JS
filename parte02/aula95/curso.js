
class Curso{

    static jogadores = ["Lucas Moura", "Oscar", "Calleri", "Andre Silva"]
    constructor(){}

    static getTodosJogadores=()=>{

        return this.jogadores

    }

    static getJogador=(ind)=>{

        return this.jogadores[ind]

    }

    static addJogador=(novo_jogador)=>{
        this.jogadores.push(novo_jogador)
    }

    static Limpar=()=>{
        this.jogadores=[]
    }


}



export default Curso