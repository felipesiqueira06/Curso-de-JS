 const converterInt=(e)=>parseInt(e)
 const dobrar =(e)=>e*2
let num=['1','2','3','4','5'].map(dobrar)
console.log(num)

//Vai ler cada item do array (um por um).
//Vai chamar a função que você passou (o callback), //entregando esse item.
//Vai pegar o valor retornado da função e colocá-lo em um //novo array.
//Não altera o array original!






// const el= document.getElementsByTagName("div")
// const val=Array.prototype.map.call(el,({innerHTML})=>innerHTML)
// console.log(val)





// let el= document.getElementsByTagName("div")
//  el = [...el]
//  el.map((e,i)=> {
//     console.log(e)
//  })




 const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
 let c = cursos.map((el,i)=>{
     console.log("Curso: " + el + "-Posição do curso:" + i)
    return "<div>"+ el +"</div>"

 })
 console.log(c)