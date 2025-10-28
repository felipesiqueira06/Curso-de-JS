import { contatos } from "./bancoContatos.js";

let contato = {
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i_contato){
        return contatos[i_contato]
    }

}

export default contato