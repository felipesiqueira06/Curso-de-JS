const teclasNum =[... document.querySelectorAll(".num")]
const teclasOP = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const tcpy = document.getElementById("tcpy")
const tlimpar = document.getElementById("tlimpar")
const calc_aba = document.getElementById("calc_aba")
const calc =  document.getElementById("calc")
let sinal = false 
let decimal = false




teclasNum.map((el)=>{
    el.addEventListener("click", (evt)=>{
        sinal = false
         if(evt.target.innerHTML == "."){
            if(!decimal){
            decimal = true
            if(display.innerHTML == "0"){
                display.innerHTML = "0."
            }else{
            display.innerHTML+= evt.target.innerHTML
        }
        }
        }else{
             if(display.innerHTML == "0"){
            display.innerHTML =""
        }
      display.innerHTML+= evt.target.innerHTML 
    }
    
        
    })
})

teclasOP.map((el)=>{
    el.addEventListener("click", (evt)=>{
        decimal = false
         if(!sinal){
            sinal = true
        if(display.innerHTML == "0"){
            display.innerHTML =""
        }
        if(evt.target.innerHTML == "x"){
            display.innerHTML += "*"
        }else{
            display.innerHTML+= evt.target.innerHTML
        }
    }

    })
})

tlimpar.addEventListener("click", (evt)=>{
     sinal = false
    decimal = false
    display.innerHTML= "0"
   
})

teclaRes.addEventListener("click", (evt)=>{
     sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

tcpy.addEventListener("click",(evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
})

calc_aba.addEventListener("click",(evt)=>{
    
    calc.classList.toggle("calc_exibir")
   if(calc.classList.contains("calc_exibir")){
    calc_aba.innerHTML = "<"
   }else{
   calc_aba.innerHTML = ">"}

   
})



