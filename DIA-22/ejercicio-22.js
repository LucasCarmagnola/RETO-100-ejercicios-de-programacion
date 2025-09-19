//Crear una galería de imágenes con botones “siguiente” y “anterior”.
// https://i.pinimg.com/736x/2c/56/a1/2c56a1311c3949800a129178ef1d3c46.jpg
// https://i.pinimg.com/736x/04/8b/94/048b94ca8d4f75ac2246acf1f9a1ab19.jpg
// https://i.pinimg.com/1200x/ed/89/7e/ed897e9c2c83fdffe9dc43625c8a6f3a.jpg
// https://i.pinimg.com/736x/37/b5/56/37b556100538dfaf84824253181c9c88.jpg
// https://i.pinimg.com/736x/87/d4/45/87d445b61c519b9b3f84fe3339f438db.jpg
// https://i.pinimg.com/736x/52/c7/63/52c7631bd0e86b4e54c9de5720efd816.jpg

galeria = ['https://i.pinimg.com/736x/2c/56/a1/2c56a1311c3949800a129178ef1d3c46.jpg', 'https://i.pinimg.com/736x/04/8b/94/048b94ca8d4f75ac2246acf1f9a1ab19.jpg', 'https://i.pinimg.com/1200x/ed/89/7e/ed897e9c2c83fdffe9dc43625c8a6f3a.jpg', 'https://i.pinimg.com/736x/37/b5/56/37b556100538dfaf84824253181c9c88.jpg', 'https://i.pinimg.com/736x/87/d4/45/87d445b61c519b9b3f84fe3339f438db.jpg', 'https://i.pinimg.com/736x/52/c7/63/52c7631bd0e86b4e54c9de5720efd816.jpg']

// function mover(direccion){
//     const fotos = document.getElementById('fotos')
//     if(direccion === 'derecha'){
//         //fotos.scrollLeft += 200
//         fotos.scrollBy({ left: 220, behavior: 'smooth' });
//     }else{
//         //fotos.scrollLeft -= 200
//         fotos.scrollBy({ left: -220, behavior: 'smooth' });
//     }
// }


let i = 0

function mover(direccion){
    const foto = document.getElementById('foto')
    if(direccion === 'derecha' && i < galeria.length - 1){
        i += 1
        foto.src = galeria[i]
    }else if(direccion === 'izquierda' && i > 0){
        i -= 1
        foto.src = galeria[i]
    }

}