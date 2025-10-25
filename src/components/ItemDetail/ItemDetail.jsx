import "./ItemDetail.css";
import { Item } from "../Item/Item";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();

  return (
    <div className="container-detail">
      <h2 className="detail-title">🧩 Detalle del producto</h2>

      <div className="detail-card">
        <Item {...detail} />
        <div className="detail-info">
          <p>{detail.info}</p>
          <p>🚚 Envíos sin cargo dentro de CABA</p>
          <button onClick={() => addItem(detail)} className="add-btn">
            🛒 Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
