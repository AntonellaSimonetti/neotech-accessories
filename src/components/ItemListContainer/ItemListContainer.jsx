import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const { category } = useParams(); // 👈 capturamos la categoría desde la URL

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) throw new Error("Hubo un problema al buscar productos");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (category) {
      const filteredProducts = products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
      setFiltered(filteredProducts);
    } else {
      setFiltered(products);
    }
  }, [category, products]);

  return (
    <section className="item-list-container">
      <h1>{titulo}</h1>
      <ItemList lista={filtered} />
    </section>
  );
};
