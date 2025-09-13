const productos = [
  { nombre: "Laptop", precio: 1200, categoria: "tecnologia", stock: 10, foto: 'https://riiing.com.ar/wp-content/uploads/2024/12/AW-FA20N-92.png' },
  { nombre: "Camiseta", precio: 20, categoria: "ropa", stock: 0, foto: 'https://riiing.com.ar/wp-content/uploads/2024/12/AW-FA20N-92.png' },
  { nombre: "Celular", precio: 800, categoria: "tecnologia", stock: 5, foto: 'https://riiing.com.ar/wp-content/uploads/2024/12/AW-FA20N-92.png' },
  { nombre: "Zapatillas", precio: 50, categoria: "ropa", stock: 3, foto: 'https://riiing.com.ar/wp-content/uploads/2024/12/AW-FA20N-92.png' },
  { nombre: "TV", precio: 1500, categoria: "tecnologia", stock: 2, foto: 'https://riiing.com.ar/wp-content/uploads/2024/12/AW-FA20N-92.png' },
  { nombre: "Auriculares", precio: 150, categoria: "tecnologia", stock: 12, foto: 'https://riiing.com.ar/wp-content/uploads/2024/12/AW-FA20N-92.png' },
  { nombre: "Mouse", precio: 25, categoria: "tecnologia", stock: 20, foto: 'https://riiing.com.ar/wp-content/uploads/2024/12/AW-FA20N-92.png' },
  { nombre: "Teclado", precio: 45, categoria: "tecnologia", stock: 15, foto: 'https://riiing.com.ar/wp-content/uploads/2024/12/AW-FA20N-92.png' },
  { nombre: "Monitor", precio: 700, categoria: "tecnologia", stock: 6, foto: 'https://riiing.com.ar/wp-content/uploads/2024/12/AW-FA20N-92.png' },
  { nombre: "Impresora", precio: 350, categoria: "tecnologia", stock: 8, foto: 'https://riiing.com.ar/wp-content/uploads/2024/12/AW-FA20N-92.png' },
  { nombre: "Pantalón", precio: 40, categoria: "ropa", stock: 7, foto: 'https://riiing.com.ar/wp-content/uploads/2024/12/AW-FA20N-92.png' },
  { nombre: "Campera", precio: 120, categoria: "ropa", stock: 4, foto: 'https://riiing.com.ar/wp-content/uploads/2024/12/AW-FA20N-92.png' },
  { nombre: "Gorra", precio: 15, categoria: "ropa", stock: 9, foto: 'https://riiing.com.ar/wp-content/uploads/2024/12/AW-FA20N-92.png' },
  { nombre: "Reloj", precio: 250, categoria: "accesorios", stock: 5, foto: 'https://riiing.com.ar/wp-content/uploads/2024/12/AW-FA20N-92.png' },
  { nombre: "Mochila", precio: 80, categoria: "accesorios", stock: 11, foto: 'https://riiing.com.ar/wp-content/uploads/2024/12/AW-FA20N-92.png' }
];


function renderProductos(productos){
  const container = document.getElementById('productos')
  container.innerHTML = '';

  productos.forEach(producto => {
      const divProducto = document.createElement('div')
      const titulo = document.createElement('h2')
      const precio = document.createElement('p')
      const stock = document.createElement('div')
      // const stockNombre = document.createElement('p')
      // const stockValor = document.createElement('p')
      const divBtn = document.createElement('div')
      const btnComprar = document.createElement('button')
      const foto = document.createElement('img')
  
      titulo.textContent = producto.nombre
      precio.textContent = `$ ${producto.precio}`
      // stockNombre.textContent = 'Stock:'
      // stockValor.textContent = producto.stock
      btnComprar.textContent = 'COMPRAR'
      divProducto.classList.add('producto')
      precio.className = 'precio'
      stock.className = 'stock'
      btnComprar.classList.add('btn-comprar')
      divBtn.classList.add('btn-container')
      foto.classList.add('foto')
      foto.setAttribute('src', producto.foto)
  
      
      container.appendChild(divProducto)
  
      // stock.appendChild(stockNombre)
      // stock.appendChild(stockValor)
      divBtn.appendChild(btnComprar)
  
      divProducto.appendChild(foto)
      divProducto.appendChild(titulo)
      divProducto.appendChild(stock)
      divProducto.appendChild(precio)
      divProducto.appendChild(divBtn)
  })
}


const filtrarProductos = function(categoria){
    const filtrados = productos.filter(producto => producto.categoria == categoria)
    renderProductos(filtrados)
}

renderProductos(productos)



