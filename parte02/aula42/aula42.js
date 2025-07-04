const p_array = document.getElementById("array")
const txt_pesquisar = document.getElementById("txt_pesquisar")
const btn_pesquisar = document.getElementById("pesquisar")
const res =  document.getElementById("resultado")

const elementos = ["html", "css", "js"]
p_array.innerHTML = "["+elementos+"]"




btn_pesquisar.addEventListener("click", (evt)=>{
    elementos.find((el,i)=>{
        res.innerHTML="Valor não encontrado"
        if(el.toUpperCase()==txt_pesquisar.value.toUpperCase()){
            res.innerHTML = "Valor encontrado " + el + " na posição " + i
            return el
        }
    })
})