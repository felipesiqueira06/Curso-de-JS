// prototype: adiconar uma propriedade ou um *Metodo a um objeto

const Nave = function(energia){
    this.energia = energia
    this.disparo = 100

}

const n1 = new Nave(100)

Nave.prototype.vidas = 3
Nave.prototype.disparar=function(){
    if(this.disparo > 0){
        this.disparo--
    }
}

n1.disparar()

console.log(n1)
console.log(n1.disparo)
