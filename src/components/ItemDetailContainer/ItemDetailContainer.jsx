import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se encontró el producto");
        }
        return res.json();
      })
      .then((data) => {
        const found = data.find((p) => p.id === id);
        if (found) {
          setDetail(found);
        } else {
          throw new Error("Producto no encontrado");
        }
      })
      .catch((err) => {
        console.error("Error al cargar el producto:", err);
      });
  }, [id]);

  return (
    <main className="detail-container">
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p className="loading">Cargando detalles del producto...</p>
      )}
    </main>
  );
};
