import React, { useState } from 'react';
import '../App.css';

//a page to select books and select the number of books to be added to cart
const ProductSelectionPage = ({ products, addToCart }) => {
  const [selectedQuantities, setSelectedQuantities] = useState({});

  const handleQuantityChange = (productId, quantity) => {
    setSelectedQuantities({
      ...selectedQuantities,
      [productId]: quantity
    });
  };

  return (
    <div className="product-selection-page">
      <h1>Product Selection Page</h1>
      <ul>
        {products.map(product => (
          <lr key={product.id}>
            <div>
              <br></br>
              <br></br>
              <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
              <div>{product.name}</div>
              <div>{product.description}</div>
              <div>${product.price}</div>
              <input
                type="number"
                min="1"
                value={selectedQuantities[product.id] || ''}
                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
              />
              <button onClick={() => addToCart(product, selectedQuantities[product.id] || 1)}>Add to Cart</button>
            </div>
          </lr>
        ))}
      </ul>
    </div>
  );
};

export default ProductSelectionPage;
