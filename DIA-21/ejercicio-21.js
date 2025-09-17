// Simular un semáforo que cambia de color automáticamente.

let ciclo
let ciclo2

function semaforo(){
    const rojo = document.getElementById('rojo')
    const amarillo = document.getElementById('amarillo')
    const verde = document.getElementById('verde')

    const rojo2 = document.getElementById('rojo2')
    const amarillo2 = document.getElementById('amarillo2')
    const verde2 = document.getElementById('verde2')

    rojo.style.backgroundColor = '#D92C2C'
    verde2.style.backgroundColor = '#4CAF50'

    verde.style.backgroundColor = 'transparent'
    amarillo.style.backgroundColor = 'transparent'
    rojo2.style.backgroundColor = 'transparent'
    amarillo2.style.backgroundColor = 'transparent'


    ciclo =setTimeout(()=>{

        rojo.style.backgroundColor = 'transparent'
        verde.style.backgroundColor = 'transparent'
        rojo2.style.backgroundColor = 'transparent'
        verde2.style.backgroundColor = 'transparent'
        amarillo.style.backgroundColor = '#E7D14C'
        amarillo2.style.backgroundColor = '#E7D14C'

        ciclo = setTimeout(()=>{

            amarillo.style.backgroundColor = 'transparent'
            rojo.style.backgroundColor = 'transparent'
            verde2.style.backgroundColor = 'transparent'
            amarillo2.style.backgroundColor = 'transparent'
            rojo2.style.backgroundColor = '#D92C2C'
            verde.style.backgroundColor = '#4CAF50'

            ciclo = setTimeout(semaforo, 5000)
        }, 1500)
    }, 5000)
}

semaforo()

function priorizarSemaforo2(){
    clearTimeout(ciclo)
    clearTimeout(ciclo2)
    
    const rojo = document.getElementById('rojo')
    const amarillo = document.getElementById('amarillo')
    const verde = document.getElementById('verde')

    const rojo2 = document.getElementById('rojo2')
    const amarillo2 = document.getElementById('amarillo2')
    const verde2 = document.getElementById('verde2')

    rojo.style.backgroundColor = '#D92C2C'
    verde2.style.backgroundColor = '#4CAF50'

    verde.style.backgroundColor = 'transparent'
    amarillo.style.backgroundColor = 'transparent'
    rojo2.style.backgroundColor = 'transparent'
    amarillo2.style.backgroundColor = 'transparent'


    ciclo2 = setTimeout(()=>{

        rojo.style.backgroundColor = 'transparent'
        verde.style.backgroundColor = 'transparent'
        rojo2.style.backgroundColor = 'transparent'
        verde2.style.backgroundColor = 'transparent'
        amarillo.style.backgroundColor = '#E7D14C'
        amarillo2.style.backgroundColor = '#E7D14C'

        ciclo2 = setTimeout(()=>{

            amarillo.style.backgroundColor = 'transparent'
            rojo.style.backgroundColor = 'transparent'
            verde2.style.backgroundColor = 'transparent'
            amarillo2.style.backgroundColor = 'transparent'
            rojo2.style.backgroundColor = '#D92C2C'
            verde.style.backgroundColor = '#4CAF50'

            ciclo2 = setTimeout(priorizarSemaforo2, 5000)
        }, 1500)
    }, 5000)
}