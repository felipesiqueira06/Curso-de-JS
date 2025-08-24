const btn = document.getElementById("btn")
const div_cassino = document.querySelectorAll(".div_cassino")
const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")
const div3 = document.getElementById("div3")
const rodadas = document.getElementById("rodadas")
const main = document.getElementById("container")

let opcao = false
let div10, div15, div20 



btn.addEventListener("click", ()=>{

    div_cassino.forEach((el)=>{
        el.innerHTML =   Math.floor(Math.random()*10)
    })
    win()
})

rodadas.addEventListener("click", ()=>{

    if(!opcao){
   div10 = document.createElement("div")
   div10.setAttribute("class", "quantidade_rodadas")
   div10.innerHTML = "10"

   div15 = document.createElement("div")
   div15.setAttribute("class", "quantidade_rodadas")
   div15.innerHTML = "15"

  
    div20 = document.createElement("div")
   div20.setAttribute("class", "quantidade_rodadas")
   div20.innerHTML = "20"

   main.appendChild(div10)
   main.appendChild(div15)
   main.appendChild(div20)

   div10.addEventListener("click", () => {
      alert("Você escolheu 10 rodadas")

      opcao = false
    })

   opcao = true
    }else{
        
    main.removeChild(div10)
    main.removeChild(div15)
    main.removeChild(div20)

    opcao = false
    
    }

})



const win=()=>{
    if(div1.innerHTML == div2.innerHTML && div1.innerHTML == div3.innerHTML){
        window.alert("GANHOU!")
    }
}