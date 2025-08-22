const btn = document.getElementById("btn")
const div_cassino = document.querySelectorAll(".div_cassino")

btn.addEventListener("click", ()=>{

    
    div_cassino.forEach((el)=>{
        el.innerHTML =   Math.floor(Math.random()*10)

    })
})