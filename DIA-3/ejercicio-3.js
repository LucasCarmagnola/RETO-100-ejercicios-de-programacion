// Escribí una función que reciba un string y lo devuelva al revés.
// Ejemplo:

// Entrada → "hola"

// Salida → "aloh"

const convertirString = function (str){
    let nuevoStr = []
    for(let i = str.length - 1; i >= 0; i--){
        nuevoStr.push(str[i])
    }
    console.log(`string ingresado: ${str}`)
    console.log(`Resultado: ${nuevoStr.join('')}`)
}

const convertirString2 = function (str){
    let nuevoStr = str.split('').reverse()

    console.log(`string ingresado: ${str}`)
    console.log(`Resultado: ${nuevoStr.join('')}`)
}

convertirString("hola")
convertirString2("chau")