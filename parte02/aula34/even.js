//const c1 = document.getElementById("c1")
const cursos = [...document.querySelectorAll(".curso")]
cursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const el = evt.target
        el.classList.add("destaque")
    })
})


//const msg=()=>{
//    alert("CLICOU")
//}

//c1.addEventListener("click", /*msg*/ ()=>{
//    alert("CLICOU")
//})

