const btn_promsessa = document.getElementById("btn_promsessa")
const numero =  document.getElementById("numero")

btn_promsessa.addEventListener("click", (evt)=>{
    
    numero.innerHTML = "Processando..."
    promessa()
    .then((retorno)=>{
    numero.innerHTML = retorno
    numero.classList.remove("erro")
    numero.classList.add("ok")

})

.catch((retorno)=>{
    numero.innerHTML = retorno
    numero.classList.remove("ok")
    numero.classList.add("erro") 


})
   

})

const promessa=()=>{
     let p = new Promise((resolve,rejected)=>{
    let resultado = true
    let tempo = 3000
    setTimeout(()=>{
        if(resultado){
            resolve("Deu tudo certo!")
        }else{
            rejected("Deu tudo errado!")
        }
    },tempo)

})
 return p

}



numero.innerHTML = "Esperando"
