import logoCyberLuv from "../../assets/logo.png"
import CartWidget from "./CartWidget"
import "./NavBar.css"
const NavBar = () => {
    return (
        <><nav>
            <div className="brand">
                <img src={logoCyberLuv} alt="" />
            </div>

            <ul>
                <li>Shop</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
            </ul>
            <CartWidget />
        </nav></>
    ) 
}

export default NavBar 