import "./product-card.style.scss";
import "../button/button.style.scss";

import { useNavigate } from "react-router-dom";

// Componente utilizzato nella pagina Voli e derivati: serve per aggiungere prodotti al carrello.

const ProductCard = ({ product }) => {

  const navigate = useNavigate();
    
  const { citta, price, imageUrl } = product;

  const goToDescrizione = () => {
    localStorage.setItem("product", JSON.stringify(product));
    navigate('/descrizione')
  }

  return (
    <div className="product-card-container" >
      <img src={imageUrl} alt={`${citta}`} />
      <div className="footer">
        <span className="nome">{citta.toUpperCase()}</span>
        <span className="price">${price}</span>
      </div>
      <button className="button-container inverted" onClick={goToDescrizione}>
        Descrizione
      </button>
    </div>
  );
};

export default ProductCard;