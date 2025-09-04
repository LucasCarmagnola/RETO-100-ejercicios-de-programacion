// Encontrar el carácter más repetido en una cadena.

const buscarCaracter = (cadena) =>{

    const textoJunto = cadena.replace(/\s+/g, "")
    const letras = textoJunto.split('')
    //console.log(letras)
    
    const resultado = letras.reduce((acumulador, letra) => {
        acumulador[letra] = (acumulador[letra] || 0) + 1
        return acumulador
    }, {})

    let mayor = 0
    let letraMayor = ''

    Object.entries(resultado).forEach(([letra, cantidad]) => {
        if(cantidad > mayor){
            mayor = cantidad
            letraMayor = letra
        }
    })

    console.log(resultado)
    console.log(`la letra mas repetida es: ${letraMayor}`)
    
}


buscarCaracter('hermosa manana verdadppppppppppp')