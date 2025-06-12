let num = document.getElementById('num')
let tab = document.getElementById('tes')



function envio(){
   if(Number(num.value) > 1) {
    let item = document.createElement('option')
item.text= `Valor ${num.value}`
tab.appendChild(item)
   } else{
    alert('Digite um número maior que 1!')
   }
 num.value = ''
 num.focus()
}


