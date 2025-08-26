// Pedí al usuario (o definí en el código) una palabra o frase.
// Recorré el string y contá:
// cuántas vocales hay,
// cuántas consonantes hay.
// Mostrá ambos resultados en consola.

const verificarPalabra = (palabra) => {
    const vocales = ['a','e','i','o','u']
    const consonantes = ['b','c','d','f','g','h','j','k','l','m',
    'n','ñ','p','q','r','s','t','v','w','x','y','z']
    let contadorVocales = 0
    let contadorConsonantes = 0
    let palabraMinuscula = palabra.toLowerCase().replace(/\s/g, '')
    
    for(let letra of palabraMinuscula){
        //vocales.includes(letra) ? contadorVocales ++ : contadorConsonantes ++
        if(vocales.includes(letra)){
            contadorVocales++
        }else if(consonantes.includes(letra)){
            contadorConsonantes++
        }
    }

    console.log(`El string ingresado contiene ${contadorVocales} vocales y ${contadorConsonantes} consonantes`)
}

verificarPalabra('Hola Mundo')
