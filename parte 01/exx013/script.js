function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(' [ERRO ]Verifique os dados e tente novamente') } else {
            
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if(fsex [0].checked) {
                var genero = 'Homem'
                if (idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'menino.jpg' )
                } else if (idade >= 10 && idade < 21)
                {//JOVEM
                    img.setAttribute('src', 'adole(o).jpg')
                    } else if (idade < 55) {
                        //ADULTO 
                        img.setAttribute('src', 'homemadulto.jpg')
                    } else {
                        //IDOSO
                        img.setAttribute('src', 'idoso.jpg')
                    }

            } else if (fsex [1].checked) {
                var genero = 'Mulher'
                if (idade >= 0 && idade < 10){
                    //CRIANÇA
                    img.setAttribute('src', 'menina(a).jpg') 
                    } else if (idade >= 10 && idade < 21)
                    {//JOVEM
                        img.setAttribute('src', 'adole(a).jpg')
                        } else if (idade < 55) {
                            //ADULTO 
                            img.setAttribute('src', 'mulheradulta.jpg')
                        } else {
                            //IDOSO
                            img.setAttribute('src', 'idos(a).jpg')
                        }
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
            res.appendChild(img)
                
           
        } 
        


        
        
} 