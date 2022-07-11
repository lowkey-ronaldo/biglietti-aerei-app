import "./product-card.style.scss";
import "../button/button.style.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

// Componente utilizzato nella pagina Shop e derivati: serve per aggiungere prodotti al carrello.

const ProductCard = ({ product }) => {
    
  const { citta, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${citta}`} />
      <div className="footer">
        <span className="nome">{citta}</span>
        <span className="price">{price}</span>
      </div>
      <button className="button-container inverted" onClick={addProductToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;