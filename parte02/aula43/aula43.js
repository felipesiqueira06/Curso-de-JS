const p_array = document.getElementById("array")

const verificar = document.getElementById("btn_verificar")
const res =  document.getElementById("resultado")

const elementos = [22,99,43,27,63]
p_array.innerHTML="["+elementos+"]"

verificar.addEventListener("click", (evt)=>{
    
   const ret = elementos.every((el,i)=>{
        if(el<18){
            res.innerHTML="Array não conforme na posição " + i
        }
        return el>=18

    })
    if(ret){
        res.innerHTML="OK"
    }
})