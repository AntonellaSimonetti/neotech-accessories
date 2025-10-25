import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";

export const Nav = () => {
  const { getTotalItems } = useCartContext();

  return (
    <nav className="nav-bar">
      <ul className="nav-menu">
        <li><Link to="/" className="nav-item">Inicio</Link></li>
        <li><Link to="/category/accesorio" className="nav-item">Accesorios</Link></li>
        <li><Link to="/category/netbook" className="nav-item">Computadoras</Link></li>
        <li className="cart-wrapper">
          <Link to="/carrito" className="nav-item cart-icon">🛒</Link>
          {getTotalItems() > 0 && (
            <span className="cart-count">{getTotalItems()}</span>
          )}
        </li>
      </ul>
    </nav>
  );
};
