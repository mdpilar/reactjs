const productos = [
    {
        id: "Azz123",
        nombre: "Producto 1",
        descripcion: "Descripcion 1",
        stock: 305,
        categoria: "dresses",
        imagen: "/img/mintdress.jpeg",
        precio: 150
    }, 
    {
        id: "Azz456",
        nombre: "Producto 2",
        descripcion: "Descripcion 2",
        stock: 102
    },
    {
        id: "Azz789",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505
    }
]


const obtenerProductos = () => {
    return new Promise ((resolve,reject) => {
        // simulamos un retraso de red de 3 segundos
        setTimeout(() =>{
            resolve(productos)
        },3000)
    })
}

export { obtenerProductos }