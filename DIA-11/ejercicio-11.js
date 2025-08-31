// Escribí una función que reciba dos números enteros (inicio y fin) y devuelva un array con todos los números primos que se encuentran en ese rango (incluyendo inicio y fin si son primos).


const buscarPrimos = function(inicio, fin){
    if(inicio < 2){ inicio = 2 }
    let primos = []

    for(let i = inicio; i <= fin; i++){
        let esPrimo = true
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                esPrimo = false
                break
            }   
        }
        if(esPrimo){
            primos.push(i)
        }
    }
    return primos
}

console.log(buscarPrimos(0,7))