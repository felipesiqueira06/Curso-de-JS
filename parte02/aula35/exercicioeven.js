const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")
const btn = document.getElementById("btn_copiar")
const btnc = document.getElementById("btn_voltar")
const todosCurso = [...document.querySelectorAll(".curso")]

todosCurso.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso = evt.currentTarget
        curso.classList.toggle("selecionado")
    })
})


btn.addEventListener("click", ()=>{
    const selecionados = [...document.querySelectorAll(".selecionado")]
    selecionados.map((el)=>{
        caixa2.appendChild(el)

    })

})

btnc.addEventListener("click", ()=>{
    const desmarcados = [...document.querySelectorAll(".curso:not(.selecionado)")]
    desmarcados.map((el)=>{
        caixa1.appendChild(el)
    })
})



/*toggle: se o elemento tem a classe selecionado ele remove a classe, se ja tem ele remove, ou seja, cliquei pela primeira vez add, cliquei dnv remove

appendChild: Anexa o filho ao elemento selecionado, nesse caso no caixa2*/
