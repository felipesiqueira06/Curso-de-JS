function aluno(nome,nota){
    this.nome =nome //variavel declarada para função aluno que recebe o valor do parametro nome.
    this.nota = nota

    this.dados_anonimo=function(){
        setTimeout(function(){
            console.log(this.nome)
             console.log(this.nota)
        },2000) 
        //setTimeout=conta um tempo e depois de acabar chama a fun
    }

    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
             console.log(this.nota)
        },2000) 
} //arrow function contorna o setTimeout, pois nao usa o contexto gerado pelo setTimeout, usa o contexto do pai (funcao aluno)

}
const al1=new aluno("Felipe",10)
al1.dados_anonimo()
al1.dados_arrow()