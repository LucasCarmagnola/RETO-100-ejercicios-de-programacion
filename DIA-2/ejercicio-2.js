const esPalindromo = function(palabra){

    let palabraMinuscula = palabra.toLowerCase()

    let letras = palabraMinuscula.split('').reverse()
    let palabraReversa = letras.join('')

    let respuesta = palabraMinuscula == palabraReversa ? true : false

    console.log(respuesta)
}

esPalindromo("Neuquen")