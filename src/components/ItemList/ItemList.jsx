import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ lista }) => {
  return (
    <section className="galeria">
      {lista.length ? (
        lista.map((prod) => (
          <Link to={`/detail/${prod.id}`} key={prod.id} className="link-item">
            <Item {...prod} />
          </Link>
        ))
      ) : (
        <p className="no-products">No hay productos disponibles 😢</p>
      )}
    </section>
  );
};
