const btn_imp = document.getElementById("btn_imp")

btn_imp.addEventListener("click", (evt)=>{

    const conteudo = document.getElementById("tabela").innerHTML

    let estilo = "<style>"
    estilo+= "table {width:100%; font: 25px Calibri;}"
    estilo+= "table, th, td{border: 2px solid black; border-collapse: collapse;"
    estilo+= "padding: 4px 8px; text-align: center;}"
    estilo+= "</style>";

    const win = window.open('','','height= 700, width= 700')

    win.document.writeln('<html><head>')
    win.document.writeln('<title>CFB Curos</title>')
    win.document.writeln(estilo)
    win.document.writeln('</head>')
    win.document.writeln('<body>')
    win.document.writeln(conteudo)
    win.document.writeln('</body></html>')

    win.print()
    win.close()


})