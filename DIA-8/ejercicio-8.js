// Generar la secuencia de Fibonacci hasta N términos.
// El usuario debe indicar un número N (cantidad de términos).
// Generá un array o lista con los primeros N números de la secuencia de Fibonacci.
// Mostrá el resultado en consola.


const generarFibonacci = function(num){
    const lista = [0,1]

    if(num === 0){ return [] }
    else if(num === 1){ return [0] }
    else if(num === 2){ return [0,1] }

    for(let i = 0; i < num - 2; i++){
        let suma = lista[i] + lista[i+1]
        lista.push(suma)
    }

    return lista
}

console.log(generarFibonacci(17))