function contar(){
    var ini = document.getElementById('txti')
    var res = document.getElementById('res')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = 'Impossível contar !'
       
        
    } else{
        res.innerHTML = 'Contando:'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo Inválido ! Considerando PASSO 1')
            p = 1

        }
        if(i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449}`
            }
            
        } else {
            for(var c = i; c >= f; c -= p ){
                res.innerHTML += `${c} \u{1f449}`

            }
            
        }
        res.innerHTML += `\u{1f3c1}`

       
    }

    


}