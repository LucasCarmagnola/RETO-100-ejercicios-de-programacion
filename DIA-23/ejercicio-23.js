// To-do list básica (agregar y eliminar tareas).

let tareasList = []

function agregarTarea(){
    const tarea = document.getElementById('input-tarea')
    const valorTarea = tarea.value
    if (valorTarea.trim() === '') return;

    objeto = {
        tarea: valorTarea,
        realizada: false,
        porcentaje: 0
    }
    tareasList.push(objeto)
    renderTareas(tareasList)
    tarea.value = ''
}


function renderTareas(tareas){
    const container = document.getElementById('container-tareas')
    container.innerHTML = '';
    tareas.forEach((tarea, index) => {
        const divTarea = document.createElement('div')
        divTarea.setAttribute('id', `tarea${index}`)
        //nuevo
        const containerOpciones = document.createElement('div')
        containerOpciones.classList.add('container-opciones')
        const containerProgreso = document.createElement('div')
        containerProgreso.classList.add('container')
        const containerBarra = document.createElement('div')
        containerBarra.classList.add('container-barra')
        const barra = document.createElement('div')
        barra.setAttribute("id", 'barra' + index.toString())
        barra.classList.add('barra')
        barra.style.width = `${tarea.porcentaje}px`;
        // if (tarea.realizada) {
        //     barra.style.width = '80px';
        // } else {
        //     barra.style.width = '0px';
        // }
        const btnProgreso = document.createElement('button')
        btnProgreso.classList.add('btn-progreso')
        btnProgreso.onclick = () => moverBarra(index)
        //
        const iconos = document.createElement('span')
        iconos.classList.add('iconos')
        divTarea.classList.add('tarea')
        
        
        const texto = document.createElement('h3')
        texto.classList.add('texto-tarea')
        
        
        const eliminarLogo = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        eliminarLogo.setAttribute("xmlns", "http://www.w3.org/2000/svg")
        eliminarLogo.setAttribute("viewBox", "0 0 26 26")
        eliminarLogo.setAttribute("width", "24")
        eliminarLogo.setAttribute("height", "24")
        eliminarLogo.classList.add('eliminar') 
        
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
        path.setAttribute("d", "M 11.5 -0.03125 C 9.542969 -0.03125 7.96875 1.59375 7.96875 3.5625 L 7.96875 4 L 4 4 C 3.449219 4 3 4.449219 3 5 L 3 6 L 2 6 L 2 8 L 4 8 L 4 23 C 4 24.644531 5.355469 26 7 26 L 19 26 C 20.644531 26 22 24.644531 22 23 L 22 8 L 24 8 L 24 6 L 23 6 L 23 5 C 23 4.449219 22.550781 4 22 4 L 18.03125 4 L 18.03125 3.5625 C 18.03125 1.59375 16.457031 -0.03125 14.5 -0.03125 Z M 11.5 2.03125 L 14.5 2.03125 C 15.304688 2.03125 15.96875 2.6875 15.96875 3.5625 L 15.96875 4 L 10.03125 4 L 10.03125 3.5625 C 10.03125 2.6875 10.695313 2.03125 11.5 2.03125 Z M 6 8 L 11.125 8 C 11.25 8.011719 11.371094 8.03125 11.5 8.03125 L 14.5 8.03125 C 14.628906 8.03125 14.75 8.011719 14.875 8 L 20 8 L 20 23 C 20 23.5625 19.5625 24 19 24 L 7 24 C 6.4375 24 6 23.5625 6 23 Z M 8 10 L 8 22 L 10 22 L 10 10 Z M 12 10 L 12 22 L 14 22 L 14 10 Z M 16 10 L 16 22 L 18 22 L 18 10 Z")
        
        eliminarLogo.appendChild(path)
        eliminarLogo.onclick = () => eliminarTarea(index)
        
        // const favoritoLogo = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        // favoritoLogo.setAttribute("xmlns", "http://www.w3.org/2000/svg")
        // favoritoLogo.setAttribute("viewBox", "0 0 26 26")
        // favoritoLogo.setAttribute("width", "24")
        // favoritoLogo.setAttribute("height", "24")
        // favoritoLogo.setAttribute("fill", "none")
        // favoritoLogo.setAttribute("stroke", "black")
        // favoritoLogo.classList.add('favorito') 
        
        // const pathFavorito = document.createElementNS("http://www.w3.org/2000/svg", "path")
        // pathFavorito.setAttribute("d", "M13 23s-7.5-4.5-10-9.5C1.5 9.5 4 5 8 5c2.2 0 3.6 1.2 5 3 1.4-1.8 2.8-3 5-3 4 0 6.5 4.5 5 8.5-2.5 5-10 9.5-10 9.5z")
        // favoritoLogo.append(pathFavorito)
        const favoritoLogo = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        favoritoLogo.setAttribute("xmlns", "http://www.w3.org/2000/svg")
        favoritoLogo.setAttribute("viewBox", "0 0 24 24")
        favoritoLogo.setAttribute("width", "24")
        favoritoLogo.setAttribute("height", "24")
        favoritoLogo.setAttribute("fill", "none")
        favoritoLogo.setAttribute("stroke", "black")
        favoritoLogo.setAttribute("stroke-width", "2")
        favoritoLogo.setAttribute("stroke-linecap", "round")
        favoritoLogo.setAttribute("stroke-linejoin", "round")
        favoritoLogo.classList.add('favorito')
        
        const pathFavorito = document.createElementNS("http://www.w3.org/2000/svg", "path")
        favoritoLogo.onclick = () => marcarTarea(index)
        
        pathFavorito.setAttribute("d", "M20 6L9 17l-5-5")
        favoritoLogo.append(pathFavorito)
        
        if(tarea.realizada) { 
            divTarea.classList.add('realizada') 
            favoritoLogo.classList.remove('favorito')
            favoritoLogo.classList.add('favorito-realizada')
            
        }
        
        texto.textContent = tarea.tarea
        
        divTarea.appendChild(texto)
        iconos.appendChild(favoritoLogo) 
        iconos.appendChild(eliminarLogo) 
        divTarea.appendChild(containerOpciones)
        container.appendChild(divTarea)
        
        containerBarra.appendChild(barra)
        containerProgreso.appendChild(containerBarra)
        containerProgreso.appendChild(btnProgreso)
        containerOpciones.appendChild(iconos)
        containerOpciones.appendChild(containerProgreso)
    });
}


function eliminarTarea(indice){
    tareasList.splice(indice, 1)
    renderTareas(tareasList)
}

function marcarTarea(indice){
    const barra = document.getElementById(`barra${indice}`)
    const tarea = document.getElementById(`tarea${indice}`)
    tareasList[indice].realizada = !tareasList[indice].realizada
    if(tareasList[indice].realizada){
        tarea.classList.add('realizada')
        tareasList[indice].porcentaje = 80
         barra.style.width = '80px';

    }else{
        tarea.classList.remove('realizada')
        tareasList[indice].porcentaje = 0
        barra.style.width = '0px';
    }
    //renderTareas(tareasList)
}

function moverBarra(index){
    const barra = document.getElementById('barra' + index.toString())
    let widthActual = parseInt(getComputedStyle(barra).width)
    let widthFinal = widthActual + 20
    barra.style.width = widthFinal.toString() + 'px'
    tareasList[index].porcentaje = widthFinal
    if(widthFinal == 80){
       tareasList[index].realizada = true 
       renderTareas(tareasList)
    }
}

function moverBarraAPunto(pixel, index){
    const barra = document.getElementById('barra' + index.toString())
    barra.style.width = pixel.toString() + 'px'
}




