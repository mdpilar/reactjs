import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home/home.jsx'
function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/"  element={< Home />} />
        <Route path="/categoria/dresses"  element={<ItemListContainer />} />
        <Route path="/categoria/tops"  element={<ItemListContainer />} />
        <Route path="/categoria/bottoms"  element={<ItemListContainer />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
