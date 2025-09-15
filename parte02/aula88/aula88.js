const btn_alert = document.getElementById("btn_alert")
const btn_confirm = document.getElementById("btn_confirm")
const btn_prompt = document.getElementById("btn_prompt")

btn_alert.addEventListener("click", (evt)=>{

    alert("OLá")

})

btn_confirm.addEventListener("click", (evt)=>{
    confirm("O São Paulo é gigante ?") // true ou false
})

btn_prompt.addEventListener("click", (evt)=>{
    prompt("Digite seu nome", "Digite aqui") // retrona oq foi digitado ou null
})
