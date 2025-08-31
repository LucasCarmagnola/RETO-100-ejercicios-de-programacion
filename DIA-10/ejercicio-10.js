// Escribí una función en JavaScript que reciba un número entero y determine si es número perfecto.


const verificarPerfecto = function(num){
    let sumaDivisores = 0

    for(let i = 1; i <= num / 2; i++){
        if(num % i === 0){
            sumaDivisores += i
        }
    }

    if(sumaDivisores === num){
        console.log(`el numero ${num} es perfecto`)
        return
    }
    console.log(`el numero ${num} NO es perfecto`)
}

verificarPerfecto(28)