const objs = document.getElementsByTagName("div")

let num = [10, 20, 30, 40, 50]

for(o of objs){
    console.log(o.InnerHTML = "curso")
}

for(o in objs){
    console.log(objs[o].InnerHTML )
}