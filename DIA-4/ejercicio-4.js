//Escribí una función que reciba un número y devuelva true si es primo, o false en caso contrario.


const buscarPrimo = function(num){

    if (num < 2) { return false }
    if (num === 2){ return true }

    for(let i = 2; i < num; i++){
        if(num % i === 0){       
            return false
        }
    }
    return true
}


buscarPrimo(7)