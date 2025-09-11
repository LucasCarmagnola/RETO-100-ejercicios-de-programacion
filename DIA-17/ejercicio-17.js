// Dado un array de objetos de productos

// Filtrar todos los productos de la categoría "tecnología" que:

// Tengan un precio menor a 1000,

// Y que además tengan stock disponible (> 0).

// El resultado debería ser un array con los productos válidos que cumplan ambas condiciones.

// Después de filtrar los productos válidos, creá una función que:

// Use map para transformar cada producto válido en un nuevo objeto que solo tenga:

// el nombre del producto en mayúsculas,

// el precio convertido a dólares (suponé que 1 dólar = 1000 pesos),

// y un campo nuevo disponible: true.

const productos = [
  { nombre: "Laptop", precio: 1200, categoria: "tecnologia", stock: 10 },
  { nombre: "Camiseta", precio: 20, categoria: "ropa", stock: 0 },
  { nombre: "Celular", precio: 800, categoria: "tecnologia", stock: 5 },
  { nombre: "Zapatillas", precio: 50, categoria: "ropa", stock: 3 },
  { nombre: "TV", precio: 1500, categoria: "tecnologia", stock: 2 }
];

const filtrarProductos = function(productos){
    return productos.filter(producto => producto.categoria == 'tecnologia' 
        && producto.precio < 1000
        && producto.stock > 0
    )
}
const transformarProductos = function(prods){
    return prods.map((producto) => {
        return {
            nombre : producto.nombre.toUpperCase(),
            precio : producto.precio / 1000,
            disponible : true }
        
    })
}

const productosFiltrados = filtrarProductos(productos)
console.log(transformarProductos(productosFiltrados))