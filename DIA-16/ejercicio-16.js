// Dado un array de direcciones de correo electrónico, usá filter junto con expresiones regulares para quedarte únicamente con los correos válidos que:

// Estén en un dominio específico (por ejemplo, gmail.com).

// El nombre de usuario (lo que está antes del @) empiece con una letra mayúscula y solo pueda contener letras, números, guiones bajos o puntos.


const searchEmails = function(emails){
    const regex = /^[A-Z][-a-z0-9_.]+@gmail\.com/
    return emails.filter(email => regex.test(email))
}


const emails = [
  "Lucas123@gmail.com",
  "maria@gmail.com",
  "Juan.Perez@yahoo.com",
  "Ana_garcia@gmail.com",
  "pepe123@outlook.com",
  "Carla-2023@gmail.com"
];

console.log(searchEmails(emails))


