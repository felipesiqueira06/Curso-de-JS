const tipoMilitar = document.querySelector("#f_tipoMilitar")
const tipoNormal = document.querySelector("#f_tipoNormal")
const municao = document.querySelector("#f_municao")
const blindagem = document.querySelector("#f_blindagem")
const carros = document.querySelector(".carros")
const btn_addCarro = document.querySelector("#btn_addCarro")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")

let a_carros = []

const removerCarro =(quem)=>{
   a_carros = a_carros.filter((el)=>{
    return el.nome != quem

    })

}

tipoMilitar.addEventListener("click", (evt)=>{
    blindagem.value = 0
    municao.value=0
    f_nome.value=""
    f_portas.value= 0
    blindagem.removeAttribute("disabled")
    municao.removeAttribute("disabled")

})

tipoNormal.addEventListener("click", (evt)=>{
    blindagem.value = 0
    municao.value=0
     f_nome.value=""
    f_portas.value= 0
    blindagem.setAttribute("disabled", "disabled")
    municao.setAttribute("disabled", "disabled")
})

const exibiCarro=()=>{

    carros.innerHTML = ""
    a_carros.map((el)=>{
        const div = document.createElement("div")
        const btn = document.createElement("button")
        btn.addEventListener("click", (evt)=>{
            const removido = evt.target.parentNode.dataset.nome
            removerCarro(removido)
            exibiCarro()

        })
        div.setAttribute("class","carro")
        div.setAttribute("data-nome", el.nome)
        div.innerHTML= `Nome: ${el.nome} </br>`
        div.innerHTML+= `Portas: ${el.portas} </br>`
        div.innerHTML+= `Cor: ${el.cor} </br>`
        div.innerHTML+= `Blindagem: ${el.blindagem} </br>`
         div.innerHTML+= `Munição: ${el.municao} </br>`
        btn.innerHTML = `remover`
        carros.appendChild(div)
        div.appendChild(btn)

    })
}

btn_addCarro.addEventListener("click",()=>{
    if(tipoNormal.checked){
        const c = new Carros(f_nome.value,f_portas.value)
        a_carros.push(c)
    }else{
        const c = new Militar(f_nome.value,f_portas.value,blindagem.value,municao.value)
        a_carros.push(c)
    }


    exibiCarro()
})

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