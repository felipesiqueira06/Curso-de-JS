const p_array = document.querySelector("#array")
const btn_reduzir = document.querySelector("#btn_verificar")
const res = document.querySelector("#resultado")

const elementos = [1,2,3,4,5]
let atu = []
let ant = []

p_array.innerHTML = "["+ elementos +"]"

btn_reduzir.addEventListener("click", (evt)=>{
    res.innerHTML = elementos.reduce((anterior,atual,ind)=>{
        atu.push(atual)
        ant.push(anterior)
        return atual + anterior
    })

    res.innerHTML += "<br/> Valor Atual: " + atu + "<br/> Valor Anterior: " + ant
})
