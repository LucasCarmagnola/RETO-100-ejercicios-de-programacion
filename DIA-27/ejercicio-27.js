document.addEventListener('DOMContentLoaded', function(){
    generarCarta()
})

const randoms = []


const generarRandom = function(){
    let valor = Math.floor(Math.random() * 10) + 1
    while(randoms.includes(valor)){
        valor = Math.floor(Math.random() * 10) + 1
    }
    randoms.push(valor)
    
    return valor
}

function generarCarta(){
    let random = generarRandom()
    let divCarta = document.getElementById('carta')
    divCarta.innerHTML = random
}


function verificarCarta(){
    let input = document.getElementById('input-num')
    let carta = document.getElementById('carta')
    let container = document.getElementById('container-juego')
    if(!input.value){ return }
    
    if(input.value == carta.innerText){
        console.log('adivinaste!!!')
        container.classList.add('acierto')
        setTimeout(() => container.classList.remove('acierto'), 600)
        input.value = ''
        generarCarta()
    }else{
        console.log(`estuviste cerca! El numero era: ${carta.innerText}`)
        input.value = ''
        generarCarta()
    }
}


