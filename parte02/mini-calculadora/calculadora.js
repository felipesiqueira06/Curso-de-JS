const valor1 = document.querySelector("#v1")
const valor2 = document.querySelector("#v2")
const resultado1 = document.querySelector("#res1")
const resultado2 = document.querySelector("#res2")
const resultado = document.querySelector("#res")
const resultadoFinal = document.querySelector("#res3")
const btn_adição = document.querySelector("#adi")
const btn_sub = document.querySelector("#sub")
const btn_mult = document.querySelector("#mult")
const btn_divi = document.querySelector("#div")


const op = [
    ()=>{
       const v1 = Number(resultado1.value)
        const v2 = Number(resultado2.value)
        resultadoFinal.innerHTML = v1 + v2

    }
    , 
    () =>{
    const v1 = Number(resultado1.value)
    const v2 = Number(resultado2.value)
    resultadoFinal.innerHTML = v1 - v2

        
    },
    
    ()=>{
      const v1 = Number(resultado1.value)
        const v2 = Number(resultado2.value)
        resultadoFinal.innerHTML = v1 * v2

        
    },

    ()=>{
     const v1 = Number(resultado1.value)
        const v2 = Number(resultado2.value)
        resultadoFinal.innerHTML = v1 / v2

        
    }
]
btn_adição.addEventListener("click", op[0])
btn_sub.addEventListener("click", op[1])
btn_mult.addEventListener("click", op[2])
btn_divi.addEventListener("click", op[3])



