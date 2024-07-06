import { obtenerProductos } from "../../data/data"
import { useState, useEffect } from "react"
import ItemList from "./ItemList";
import "./ItemList.css"

const ItemListContainer = ({ saludo }) => {
    const [ productos, setProductos] = useState([])

    useEffect (() => {
        obtenerProductos ()
        .then((respuesta)=>{
            setProductos(respuesta);
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            console.log("finalizo la promesa");
        });
    
    },[] ); 




    return (
        <div> 
            <h2>{saludo}</h2>
            <ItemList productos = {productos} />
        </div>
    );        
};
export default ItemListContainer;
