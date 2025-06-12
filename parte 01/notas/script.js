function anotar(){
let tarefa = document.getElementById('inot').value
let lista = document.getElementById('itar')




if(tarefa.trim() !== ""){
   
    lista.style.background = '#bbe4bb'
    let item = document.createElement('option')
    item.text = tarefa
    item.value = tarefa
    lista.appendChild(item)

    document.getElementById('inot').value = ""
} else{
    window.alert(`Digite uma tarefa!`)
}



}