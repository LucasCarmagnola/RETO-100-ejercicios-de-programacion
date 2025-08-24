//Dado un array de números, tu tarea es recorrerlo y encontrar el mayor y el menor de todos.

let numeros = [3, 67, 15, 89, 24, 1, 99]

let mayor = numeros[0]
let menor = numeros[0]

numeros.forEach(numero => {
    if(numero > mayor){ mayor = numero }
    if(numero < menor){ menor = numero }
})

console.log(`El mayor es: ${mayor}`)
console.log(`El menor es: ${menor}`)




