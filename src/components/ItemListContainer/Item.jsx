const Item = ( { producto }) => {
    return (
        <div >
        <img src={producto.imagen} alt=""  />
        <p>{producto.nombre}</p>
        <p> precio: ${producto.precio}</p>
    
    </div>
    )
}
export default Item