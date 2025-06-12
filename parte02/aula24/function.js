//FUNÇÕES ANONIMAS 
/*const f = function (n1,n2) {return n1 + n2}
console.log(f(10,8)) */

//FUNÇÃO CONSTRUTOR ANONIMA
const f = new Function ("n1","n2", "return n1 + n2")

console.log(f(10,5))