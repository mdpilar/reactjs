import { useState, useEffect } from "react"
import { obtenerProductos } from "../../data/data.js"
    const ItemDetailContainer = () => {
        const [producto, setProducto] = useState ({})

        useEffect (()=> {
            obtenerProductos ()
            .then ((data)=> {
                const productoFiltrado = data.find ((productoData)=> productoData.id === "Azz123")
                setProducto(productoFiltrado)
            }) 

        }, [])
    return (
        <div>
            <h2>{producto.nombre}</h2>
            <img src={producto.imagen} alt="" />
        </div>
    )
}
export default ItemDetailContainer 