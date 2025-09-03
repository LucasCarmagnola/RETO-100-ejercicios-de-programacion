// Escribí una función que encuentre el mínimo común múltiplo (MCM) de dos números

const buscarMCM = (num1, num2) => {
    let a = num1 
    let b = num2 

    while(b !== 0){
        const resto = a % b
        a = b  
        b = resto
    }
    const mcd = a

    const mcm = (num1 * num2) / mcd
    return mcm
}


const num1 = 12
const num2 = 24
console.log(`El Minimo comun multiplo entre ${num1} y ${num2} es: ${buscarMCM(num1,num2)}`)