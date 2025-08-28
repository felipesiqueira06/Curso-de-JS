const btn = document.getElementById("btn")
const div_cassino = document.querySelectorAll(".div_cassino")
const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")
const div3 = document.getElementById("div3")
const rodadas = document.getElementById("rodadas")
const main = document.getElementById("container")
const play = document.getElementById("play")
const conteudo = document.getElementById("conteudo")
const parar = document.getElementById("stop")

let opcao = false
let div10, div15, div20 
let totalRodadas = 0



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

   const fecharopcao=()=>{
    main.removeChild(div10)
    main.removeChild(div15)
    main.removeChild(div20)

    opcao = false

   }

   div10.addEventListener("click", () => {
    totalRodadas = 10  
    play.style.display = "flex"
    parar.style.display = "flex"
      play.innerHTML = "Girar </br> 10 rodadas"
      fecharopcao()
      
    })

   

    div15.addEventListener("click", () => {
      totalRodadas =15
        play.style.display = "flex"
      play.innerHTML = "Girar </br> 15 rodadas"
      fecharopcao()
      
    })

    div20.addEventListener("click", () => {
      totalRodadas = 20
        play.style.display = "flex"
      play.innerHTML = "Girar </br> 20 rodadas"
      fecharopcao()
       
    })

     parar.addEventListener("click", ()=>{
          

    })

    play.addEventListener("click", ()=>{
        let rodadaAtual = 1

        function SortearNum(){
            div_cassino.forEach((el)=>{
                el.innerHTML = Math.floor(Math.random()*10)
            })

            btn.innerHTML= `Rodada atual: ${rodadaAtual}`

            if(rodadaAtual < totalRodadas){
                rodadaAtual++
                setTimeout(SortearNum, 500)
            } else if(div1.innerHTML == div2.innerHTML && div1.innerHTML == div3.innerHTML){
               window.alert("GANHOU!")
                } else{
                    alert("Rodadas expiradas")
                }
        }

        SortearNum()

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