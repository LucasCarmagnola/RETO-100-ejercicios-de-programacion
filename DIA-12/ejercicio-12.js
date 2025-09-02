// Escribí una función que reciba una cadena de texto (una oración) y devuelva una nueva cadena con las palabras en orden invertido, pero sin invertir las letras de cada palabra.

const invertirFrase = function(frase){
    let palabras = frase.split(" ")
    let reversa = palabras.reverse()
    return reversa.join(" ")
}

const invertirFrase2 = function(frase){
    let palabras = frase.split(" ")
    let reversa = []
    palabras.forEach(palabra => {
        reversa.unshift(palabra)
    })
    return reversa.join(" ")
}


console.log(invertirFrase('hola mundo'))
console.log(invertirFrase2('hola mundo loco'))


