import logoCyberLuv from "../../assets/logo.jpg"
import CartWidget from "./CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <><nav>
            <div className="brand">
                <img src={logoCyberLuv} alt="" />
            </div>

            <ul>
                <Link to="/">Home</Link>
                <Link to="/categoria/dresses">Dresses</Link>
                <Link to="/categoria/tops"> Tops</Link>
                <Link to="/categoria/bottoms">Bottoms</Link>
            </ul>
            <CartWidget />
        </nav></>
        
    ) 
}

export default NavBar 