const cursos = [...document.querySelectorAll(".curso")]
const caixa1 = document.getElementById("caixa1")

cursos.map((el) => {

    const lixeira = document.createElement("button")
        lixeira.innerHTML = "Lixeira"
        lixeira.setAttribute("class", "button")

    lixeira.addEventListener("click", (evt) =>{
        caixa1.removeChild(evt.target.parentNode)
       
    })
     el.appendChild(lixeira)
})