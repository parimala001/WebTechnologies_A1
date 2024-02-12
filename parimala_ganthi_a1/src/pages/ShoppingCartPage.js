import React, { useState } from 'react';
import '../App.css';

const ShoppingCartPage = ({ cartItems, removeFromCart, updateQuantity, finalizePurchase }) => {
  const [isPurchaseConfirmed, setIsPurchaseConfirmed] = useState(false);

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleFinalizePurchase = () => {
    if (cartItems.length === 0) {
      // if no books are selected
      alert('No items selected.');
      return;
    }
    
    finalizePurchase(); 
    // if cart has some books
    setIsPurchaseConfirmed(true);
  };

  return (
    <div className="shopping-cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items selected.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <div>
                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
                <div>{item.name}</div>
                <div>${item.price}</div>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <>
          <button onClick={handleFinalizePurchase}>Finalize Purchase</button>
          {isPurchaseConfirmed && <p>Order Confirmed!</p>}
        </>
      )}
    </div>
  );
};

export default ShoppingCartPage;
