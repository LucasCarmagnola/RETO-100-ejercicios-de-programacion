// Validar email con regex


const verificarEmail = function(email){

    const regex = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,}$/

    return regex.test(email)
}


console.log(verificarEmail('pepe@utn.edu.ar'))


