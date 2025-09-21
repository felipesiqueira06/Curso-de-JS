const objetos = document.getElementById("objetos")

const computador={
    cpu: "i9",
    Ram: "32gb",
    Hd: "2TB"
}

const o1={obj1:'1'}
const o2={obj2:'2'}
const o3={obj3:'3'}
const o4=Object.assign(o1,o2,o3)

console.log(o4)




const computadores=[
    {
    cpu: "i9",
    Ram: "32gb",
    Hd: "2tb"
    },
    {
    cpu: "i7",
    Ram: "16gb",
    Hd: "1tb"
    },
    {
    cpu: "i3",
    Ram: "8gb",
    Hd: "500gb"
    }
]

//objetos.innerHTML = JSON.stringify(computadores)

computadores.forEach((c)=>{
    const div = document.createElement("div")
    div.innerHTML = c.cpu + "<br/>" + c.Ram + "<br/>" + c.Hd
    div.setAttribute("class","computador")
    objetos.appendChild(div)
})