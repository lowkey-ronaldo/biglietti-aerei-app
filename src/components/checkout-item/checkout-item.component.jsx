import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.style.scss';

// Viene usato dalla pagina Checkout

const CheckoutItem = ({ cartItem }) => {
  
  const { citta,
          imageUrl,
          price, 
          quantity, 
          dataPart,
          oraPart,
          aeroportoPart,
          aeroportoArr,
        } = cartItem;

  if(quantity ){
    alert("Fine posti");
  }

  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
      
      {/* <div className='image-container'>
        <img src={imageUrl} alt={`${citta}`} />
      </div> */}
      <span className='name'> {`${localStorage.getItem("loggedUser")}`} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <span className='price'> {oraPart}</span>
      <span className='price'> {dataPart}</span>
      <span className='price'> {aeroportoPart}</span>
      <span className='price'> {aeroportoArr}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;