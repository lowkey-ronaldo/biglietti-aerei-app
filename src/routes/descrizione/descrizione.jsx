import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Descrizione = () => {

    const navigate = useNavigate();

    const { addItemToCart } = useContext(CartContext);

    const product = JSON.parse(localStorage.getItem("product"));

    const {citta, nome, aeroportoPart, aeroportoArr, dataPart, oraPart } = product;

    const addProductToCart = () => addItemToCart(product);

    const goToIndietro = () => {
        navigate(-1);

    }

    return(
        <div>
        <h2>{nome}</h2>
        <p>Volo per : {citta.toUpperCase()}</p>
        <p>Aeroporto di partenza : {aeroportoPart}</p>
        <p>Aeroporto di arrivo : {aeroportoArr}</p>
        <p>Data di partenza : {dataPart}</p>
        <p>Ora di partenza : {oraPart}</p>
        <button className="button-container inverted" onClick={goToIndietro}>Indietro</button>
        <br/>
        <button className="button-container inverted" onClick={addProductToCart}>Add to cart</button>
        </div>
    )
}

export default Descrizione;