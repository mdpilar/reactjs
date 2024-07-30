import { BrowserRouter, Routes, Route } from "react-router-dom";


import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error from "./components/Ejemplos/Error";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito/Carrito"
import Checkout from "./components/checkout/Checkout";

import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;