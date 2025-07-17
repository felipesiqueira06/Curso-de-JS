const nomeForm = document.getElementById("f_nome")
const idadeForm = document.getElementById("i_nome")
const btn =  document.getElementById("btn_add")
const res = document.querySelector(".res")


const pessoa = {
    nome,
    idade,
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNome:function(nome){
         this.nome = nome
    },
    setIdade:function(idade){
         this.idade = idade
    }
}

const add=()=>{
    res.innerHTML = ""
    const div = document.createElement("div")
    div.innerHTML = `Nome: ${pessoa.nome} <br/>
    Idade: ${pessoa.idade}`
    res.appendChild(div)

}

btn.addEventListener("click", ()=>{
    if(nomeForm.value !== "" && idadeForm.value !== ""){
        pessoa.setIdade(idadeForm.value)
        pessoa.setNome(nomeForm.value)
         add()
    }
    inputNome.focus()
})


