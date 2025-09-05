const caixa = document.getElementById("caixa")

let mapa = new Map()

//mapa.set("CHAVE","VALOR")

mapa.set("Curso", "JavaScript")
mapa.set("Idaded", 19)
mapa.set("Time", "São Paulo")
mapa.set(1, "Felipe")

const num = 1
if(mapa.has(num)){
    res = "A chave existe na coleção como valor: " + mapa.get(num) 
}else{
    res = "A chave NÃO está na coleção!"
     
}
res+="<br/> O tamanho da coleção é: " + mapa.size
caixa.innerHTML = res

mapa.forEach((el)=>{
    console.log(el)
})



//caixa.innerHTML = mapa.get("Curso")
