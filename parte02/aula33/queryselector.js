const divTodas = [...document.getElementsByTagName("div")]
const cursoTodos = [...document.getElementsByClassName("curso")]
const cursoc1 = [...document.getElementsByClassName("c1")]
const cursoc2 = [...document.getElementsByClassName("c2")]
const cursoEspecial =document.getElementById("c1")

//const query_divTodas=[...document.querySelectorAll("div[class]")]
const query_divTodas=[...document.querySelectorAll("div > p")]
const query_cursoTodos=[...document.querySelectorAll(".curso")]
const query_cursoc1 = [...document.querySelectorAll(".c1")]
const query_cursoc2 = [...document.querySelectorAll(".c2")]

console.log(query_divTodas)
// console.log(query_cursoc1)
// console.log(query_cursoc2)

// console.log(divTodas)
// console.log(cursoTodos)
// console.log(cursoc1)
// console.log(cursoc2)
// console.log(cursoEspecial)

