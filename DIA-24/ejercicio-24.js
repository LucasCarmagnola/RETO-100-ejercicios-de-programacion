// Barra de progreso que avance al hacer click en un botón.






function moverBarra(){
    const barra = document.getElementById('barra')
    let widthActual = parseInt(getComputedStyle(barra).width)
    let widthFinal = widthActual + 20
    barra.style.width = widthFinal.toString() + 'px'
}





