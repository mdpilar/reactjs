import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'

function App() {
  
  return (
  <div>
      <NavBar />
      <ItemListContainer saludo="Bienvenidos a CyberLuv" />
  </div>
  )
}

export default App
