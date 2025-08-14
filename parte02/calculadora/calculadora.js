const teclasNum =[... document.querySelectorAll(".num")]
const teclasOP = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const tON = document.getElementById("tON")
const tlimpar = document.getElementById("tlimpar")

teclasNum.map((el)=>{
    el.addEventListener("click", (evt)=>{
        display.innerHTML+= evt.target.innerHTML

    })
})

teclasOP.map((el)=>{
    el.addEventListener("click", (evt)=>{
        display.innerHTML+= evt.target.innerHTML

    })
})

tlimpar.addEventListener("click", (evt)=>{
    display.innerHTML=0
})