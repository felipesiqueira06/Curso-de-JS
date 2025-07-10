const caixa = document.querySelector("#caixa")

let cursos = ["HTML", "CSS", "Javascript"]

// cursos.push("C++") add por ultimo
// cursos.unshift("Phyton")  add em primeiro
//cursos.pop() : apaga o ultimo elmento
// cursos.shift()  apaga o primeiro


cursos.map((el)=>{
    let p = document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)
})


