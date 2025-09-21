const objetos = document.getElementById("objetos")

const computador={
    cpu: "i9",
    Ram: "32gb",
    Hd: "2TB"
}

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