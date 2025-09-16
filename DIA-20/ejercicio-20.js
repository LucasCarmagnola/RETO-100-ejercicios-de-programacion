// Simular un semáforo que cambia de color automáticamente.





function iniciarSemaforo(){
    const rojo = document.getElementById('rojo')
    const amarillo = document.getElementById('amarillo')
    const verde = document.getElementById('verde')


    rojo.style.backgroundColor = '#D92C2C'
    console.log('rojo')
    verde.style.backgroundColor = 'transparent'
    amarillo.style.backgroundColor = 'transparent'

    setTimeout(()=>{
        rojo.style.backgroundColor = 'transparent'
        verde.style.backgroundColor = 'transparent'
        amarillo.style.backgroundColor = '#E7D14C'
        console.log('amarillo')
    }, 2000)

    setTimeout(()=>{
        amarillo.style.backgroundColor = 'transparent'
        rojo.style.backgroundColor = 'transparent'
        verde.style.backgroundColor = '#4CAF50'
        console.log('verde')
    }, 5000)

    setTimeout(()=>{
        iniciarSemaforo()
    }, 8000)


}

function semaforo(){
    const rojo = document.getElementById('rojo')
    const amarillo = document.getElementById('amarillo')
    const verde = document.getElementById('verde')

    rojo.style.backgroundColor = '#D92C2C'
    verde.style.backgroundColor = 'transparent'
    amarillo.style.backgroundColor = 'transparent'

    setTimeout(()=>{

        rojo.style.backgroundColor = 'transparent'
        verde.style.backgroundColor = 'transparent'
        amarillo.style.backgroundColor = '#E7D14C'

        setTimeout(()=>{

            amarillo.style.backgroundColor = 'transparent'
            rojo.style.backgroundColor = 'transparent'
            verde.style.backgroundColor = '#4CAF50'

            setTimeout(semaforo, 10000)
        }, 3000)
    }, 10000)
}

semaforo()