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
            <ItemDetail producto={producto} />
        )

}
export default ItemDetailContainer 