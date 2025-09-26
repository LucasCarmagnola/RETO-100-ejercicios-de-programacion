

document.addEventListener('DOMContentLoaded', function(){

})

let color 

function generarColor(){
    const divColor = document.getElementById('color')
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    color = `rgb(${r}, ${g}, ${b})`; 
    divColor.style.backgroundColor = color

}   


function aplicarColor(){
    document.body.style.backgroundColor = color
}