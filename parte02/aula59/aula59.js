//stringify--> Objeto literal para JSON
//parse--> Json para objeto 

const pessoa = {
    nome: "Felipe",
    time: "São Paulo",
    idade : 19,
    jogadores:{
        genio:"Marcos.A",
        bom: "Luciano",
        ok: "Andre Silva"
    }


}

const s_json=JSON.stringify(pessoa)

const o_json_pessoa = JSON.parse(s_json)
