import "./Item.css";

export const Item = ({ name, price, description, imageUrl, children }) => {
  return (
    <article className="product-item">
      <img src={imageUrl} alt={description} className="product-image" />
      <h2>{name}</h2>
      <p className="price">💲{price}</p>
      <p className="description">{description}</p>
      {children}
    </article>
  );
};
