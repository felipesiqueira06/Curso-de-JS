const data = new Date()

let dia = data.getDate()
dia = dia<10?"0" + dia:dia

let mes = data.getMonth() + 1
mes = mes<10?"0" + mes:mes

const data_r = dia + "/" + mes + "/" + data.getFullYear()
console.log(data_r)
