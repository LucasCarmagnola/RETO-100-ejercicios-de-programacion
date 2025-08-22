const esPalindromo = function(palabra){

    let palabraMinuscula = palabra.toLowerCase()

    let letras = palabraMinuscula.split('').reverse()
    let palabraReversa = letras.join('')

    let respuesta = palabraMinuscula == palabraReversa ? true : false
    console.log(respuesta)
}

const esPalindromo2 = function(palabra){

    let palabraMinuscula = palabra.toLowerCase()
    let letrasReversa = []

    for(const letra of palabraMinuscula){
        letrasReversa.unshift(letra)
    }
    
    let palabraReversa = letrasReversa.join('')

    let respuesta = palabraMinuscula == palabraReversa ? true : false
    console.log(respuesta)
}
esPalindromo("Neuquen")
esPalindromo2("Hola")
