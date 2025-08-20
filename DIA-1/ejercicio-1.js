const findMultiplesFizzBuzz = function(minimo = 1, maximo = 100){
    
    for(let i = minimo; i <= maximo; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(`FizzBuzz`)
        }else if(i % 3 === 0){
            console.log(`Fizz`)
        }else if(i % 5 === 0){
            console.log(`Buzz`)
        }else{
            console.log(i)
        }
    }
} 

findMultiplesFizzBuzz()
