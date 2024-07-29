import "./data.css"

const productos = [
    {
        id: "Azz123",
        nombre: "Producto 1",
        descripcion: "Descripcion 1",
        stock: 305,
        categoria: "dresses",
        imagen: "/img/dressmint.jpeg",
        precio: 150.00
    }, 
    {
        id: "Azz456",
        nombre: "Producto 2",
        descripcion: "Descripcion 2",
        stock: 102,
        categoria: "dresses",
        imagen: "/img/dresslace.jpeg",
        precio: 50.00
    },
    {
        id: "Azz789",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "dresses",
        imagen: "/img/dressmono.jpeg",
        precio: 45.00
    },
    {
        id: "Azz000",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "dresses",
        imagen: "/img/dressgray.jpeg",
        precio: 45.00
    },
    {
        id: "Azz111",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "dresses",
        imagen: "/img/dressblack.jpeg",
        precio: 45.00
    },
    {
        id: "Azz222",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "dresses",
        imagen: "/img/dressover.jpeg",
        precio: 45.00
    },
    {
        id: "Azz333",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "dresses",
        imagen: "/img/dressnude.jpeg",
        precio: 45.00
    },
    {
        id: "Azz444",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "dresses",
        imagen: "/img/dresssatin.jpeg",
        precio: 45.00
    },
    {
        id: "Azz555",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "dresses",
        imagen: "/img/dressblue.jpeg",
        precio: 45.00
    },
    {
        id: "Azz777",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "dresses",
        imagen: "/img/dresscocoa.jpeg",
        precio: 45.00
    },
    {
        id: "Azz888",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "dresses",
        imagen: "/img/dresssleeve.jpeg",
        precio: 45.00
    },
    {
        id: "Bzz123",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "tops",
        imagen: "/img/topblack.jpeg",
        precio: 45.00
    },
    {
        id: "Bzz456",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "tops",
        imagen: "/img/topblue.jpeg",
        precio: 45.00
    },
    {
        id: "Bzz789",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "tops",
        imagen: "/img/topcamu.jpeg",
        precio: 45.00
    },
    {
        id: "Bzz000",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "tops",
        imagen: "/img/topcancer.jpeg",
        precio: 45.00
    },
    {
        id: "Bzz111",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "tops",
        imagen: "/img/topcorset.jpeg",
        precio: 45.00
    },
    {
        id: "Bzz222",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "tops",
        imagen: "/img/topcream.jpeg",
        precio: 45.00
    },
    {
        id: "Bzz333",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "tops",
        imagen: "/img/topcrochet.jpeg",
        precio: 45.00
    },
    {
        id: "Bzz444",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "tops",
        imagen: "/img/tophoodie.jpeg",
        precio: 45.00
    },
    {
        id: "Bzz555",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "tops",
        imagen: "/img/toppink.jpeg",
        precio: 45.00
    },
    {
        id: "Bzz666",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "tops",
        imagen: "/img/topruffle.jpeg",
        precio: 45.00
    },
    {
        id: "Bzz777",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "tops",
        imagen: "/img/topstrapples.jpeg",
        precio: 45.00
    },
    {
        id: "Bzz888",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "tops",
        imagen: "/img/toptube.jpeg",
        precio: 45.00
    },
    {
        id: "Czz123",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "bottoms",
        imagen: "/img/bottombagggy.jpeg",
        precio: 45.00
    },
    {
        id: "Czz456",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "bottoms",
        imagen: "/img/bottomflared.jpeg",
        precio: 45.00
    },
    {
        id: "Czz789",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "bottoms",
        imagen: "/img/bottomskirt.jpeg",
        precio: 45.00
    },
    {
        id: "Czz000",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "bottoms",
        imagen: "/img/bottomdenim.jpeg",
        precio: 45.00
    },
    {
        id: "Czz111",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "bottoms",
        imagen: "/img/bottommini.jpeg",
        precio: 45.00
    },
    {
        id: "Czz222",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "bottoms",
        imagen: "/img/bottomsgrey.jpeg",
        precio: 45.00
    },
    {
        id: "Czz333",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "bottoms",
        imagen: "/img/bottomlowrise.jpeg",
        precio: 45.00
    },
    {
        id: "Czz444",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "bottoms",
        imagen: "/img/bottomdenimj.jpeg",
        precio: 45.00
    },
    {
        id: "Czz555",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "bottoms",
        imagen: "/img/bottomruffled.jpeg",
        precio: 45.00
    },
    {
        id: "Czz666",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "bottoms",
        imagen: "/img/bottomboxer.jpeg",
        precio: 45.00
    },
    {
        id: "Czz777",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "bottoms",
        imagen: "/img/bottomgrey.jpeg",
        precio: 45.00
    },
    {
        id: "Czz888",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        stock: 505,
        categoria: "bottoms",
        imagen: "/img/bottomskirtb.jpeg",
        precio: 45.00
    },
    
]

const newcollection = [
    {
        id: "Dzz123",
        nombre: "Floral Set",
        descripcion: "",
        stock: 0,
        categoria: "newcollection",
        imagen: "/img/setone.jpeg",
        precio: 150.00
    },
    {
        id: "Dzz456",
        nombre: "Floral Set",
        descripcion: "",
        stock: 0,
        categoria: "newcollection",
        imagen: "/img/settwo.jpeg",
        precio: 150.00
    },
    {
        id: "Dzz789",
        nombre: "Floral Set",
        descripcion: "",
        stock: 0,
        categoria: "newcollection",
        imagen: "/img/setthree.jpeg",
        precio: 150.00
    },
    {
        id: "Dzz000",
        nombre: "Floral Set",
        descripcion: "",
        stock: 0,
        categoria: "newcollection",
        imagen: "/img/setfour.jpeg",
        precio: 150.00
    },
    
    
]


const obtenerProductos = () => {
    return new Promise ((resolve,reject) => {
        // simulamos un retraso de red de 3 segundos
        setTimeout(() =>{
            resolve(productos)
        },2000)
    })
}

export { obtenerProductos }