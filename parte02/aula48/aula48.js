let valor = [1,2,3,4,5]
let op = [
    (val) =>{
        let res = 0
        for(v of val){
            res += v
        }
        return res

    },
     (val) =>{
        let res = 1
        for(v of val){
            res *= v
        }
        return res

    },
     (val) =>{
        
        for(v of val){
            console.log(v)
        }
       

    }
]

console.log(op[1](valor))

