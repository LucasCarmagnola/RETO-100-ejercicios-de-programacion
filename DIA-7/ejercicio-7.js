// Pedí al usuario (o definí en el código) una palabra o frase.
// Recorré el string y contá:
// cuántas vocales hay (a, e, i, o, u),
// cuántas consonantes hay.
// Mostrá ambos resultados en consola.


const verificarPalabra = (palabra) => {
    const vocales = ['a','e','i','o','u']
    let contadorVocales = 0
    let consonantes = 0
    let palabraMinuscula = palabra.toLowerCase().replace(/\s/g, '')
    
    for(letra of palabraMinuscula){
        vocales.includes(letra) ? contadorVocales ++ : consonantes ++
    }

    console.log(`El string ingresado contiene ${contadorVocales} vocales y ${consonantes} consonantes`)

}

verificarPalabra('Hola Mundo')
