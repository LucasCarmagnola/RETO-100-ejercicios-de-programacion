// Escribí una función en JavaScript que reciba un array y determine si contiene elementos duplicados.

const verificarDuplicados = function(lista){
    for(let i = 0; i < lista.length; i++){
        for(let j = i + 1; j < lista.length; j++){
            if(lista[i] === lista[j]){
                return true
            }
        }
    }
    return false
}

let numeros = [1,2,3,4,4,5,6,]
console.log(verificarDuplicados(numeros))