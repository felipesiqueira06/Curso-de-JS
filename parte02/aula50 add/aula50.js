const caixa = document.getElementById("caixa")

let jogadores = new Set(["SABINO","ANDRÉ SILVA","CÉDRIC"])

jogadores.add("RUINS")
jogadores.add("MUITO RUINS")
jogadores.add("MUITO RUINS")
jogadores.add("MUITO RUINS")
jogadores.add("MUITO RUINS")

console.log(jogadores)

jogadores.forEach((el)=>{
    caixa.innerHTML+= el + "<br/>"
})