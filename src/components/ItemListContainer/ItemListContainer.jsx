import { obtenerProductos } from "../../data/data"
import { useState, useEffect } from "react"
import ItemList from "./ItemList";
import "./ItemList.css"
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
    const [ productos, setProductos] = useState([]);

    const { idCategoria } = useParams()



    useEffect (() => {
        obtenerProductos ()
        .then((respuesta)=>{
            if(idCategoria) {
                const productosFiltrados = respuesta.filter ((producto)=> producto.categoria === idCategoria)
                setProductos (productosFiltrados)
            }else{
        setProductos(respuesta);
            } 
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            console.log("finalizo la promesa");
        });
    
    },[idCategoria] ); 




    return (
        <div> 
            <h2>{saludo}</h2>
            <ItemList productos = {productos} />
        </div>
    );        
};
export default ItemListContainer;
