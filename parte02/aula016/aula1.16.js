let num = [10, 20, 30, 40, 50]

for(i in num){
    //console.log(i) 'PERCORE APENAS OS INDICES'
    console.log(num[i])
}

for(i of num){
    console.log(i) //PERCORRE JÁ OS ELEMENTOS 
}