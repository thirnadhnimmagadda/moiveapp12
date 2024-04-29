import "./Header.css"; 
import { Link,NavLink } from "react-router-dom";
import Logo from "../assets/logo.png"
export const Header = () => {
  return (
    <header>
        <Link to ="/" className="logo">
            <img src={Logo} alt="Shopmate" />
            <span>Shopping Cart</span>
        </Link>
        <nav>
            <NavLink to="/" className="link" end>Home</NavLink>
            <NavLink to="/cart" className= "link">Cart</NavLink>
        </nav>
        <nav>
            <Link to="/cart" className="items">
            <span>Cart:2</span>

            </Link>
        </nav>
    </header>
  )
}
