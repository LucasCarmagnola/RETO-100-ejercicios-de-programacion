// Dado un array de números, calculá la suma de los números que estén en posiciones pares y la suma de los que estén en posiciones impares.
// Al final, mostrá cuál suma es mayor (o si son iguales).




const numeros = [12, 5, 3, 9, 4]
let sumaPares = 0
let sumaImpares = 0
for(let i = 0; i < numeros.length; i++){
    if(i % 2 === 0){
        sumaPares += numeros[i]
    }else{
        sumaImpares += numeros[i]
    }
}

let respuesta = sumaPares > sumaImpares ? 'La suma de los pares es mayor' : 'La suma de los impares es mayor'
if(sumaPares == sumaImpares){ respuesta = 'Las sumas son iguales'}
console.log(respuesta)