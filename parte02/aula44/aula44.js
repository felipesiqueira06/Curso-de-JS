const p_array = document.getElementById("array")

const verificar = document.getElementById("btn_verificar")
const res =  document.getElementById("resultado")

const elementos = [12,9,6,18,16]
p_array.innerHTML="["+elementos+"]"

verificar.addEventListener("click", (evt)=>{
    
   const ret = elementos.some((el,i)=>{
        if(el<18){
            res.innerHTML="Array não conforme na posição " + i
        }
        return el>=18

    })
    if(ret){
        res.innerHTML="OK"
    }
})

//some: Pelo menos UM elemento concidir com oque foi determinado