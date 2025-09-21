//Temporizador de cuenta atrás tipo Pomodoro.


let work = true

function iniciar(){
    const titulo = document.getElementById('titulo')
    titulo.innerHTML = 'WORK'
    setInterval(restarSegundos, 1000)
}

function restarSegundos(){
    const segundos = document.getElementById('segundos')
    let valorActual = parseInt(segundos.innerText)
    //const minutos = document.getElementById('minutos')

    if(valorActual === 0) { 
        segundos.innerHTML = 59
        restarMinutos()
    }else{
        segundos.innerHTML = valorActual - 1
    }
}

function restarMinutos(){
    const minutos = document.getElementById('minutos')
    const segundos = document.getElementById('segundos')
    const titulo = document.getElementById('titulo')
    let valorActual = parseInt(minutos.innerHTML)
    if(valorActual === 0 && work){
        minutos.innerHTML = '1'
        segundos.innerHTML = '00'
        titulo.innerHTML = 'REST'
        work = false
    }else if(valorActual === 0 && !work){
        minutos.innerHTML = '25'
        segundos.innerHTML = '00'
        titulo.innerHTML = 'WORK'
        work = true
    }else{
        minutos.innerHTML = valorActual - 1
    }
}



