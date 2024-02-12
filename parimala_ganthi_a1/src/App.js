//Parimala Ganthi
//8944294
//Assignment1_Web Technologies


import React, { useState } from 'react';
import ProductSelectionPage from './pages/ProductSelectionPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import UserAccountPage from './pages/UserAccountPage';
import styles from './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('productSelection');
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({
    name: 'Parimala',
    email: 'parimala@gmail.com',
    address: '8944294 , brighton street, waterloo'
  });

  const products = [
    { id: 1, name: 'Pride and Prejudice',description: 'Description: written by Hugh Thomson', price: 10, image: require('./pages/Book1.jpg') },
    { id: 2, name: 'Invisible Man',description: 'Description: written by Ralph Ellison', price: 20, image: require('./pages/Book2.jpg') },
    { id: 3, name: 'Fahrenheit 451',description: 'Description: written by Ray Bradbury', price: 30, image: require('./pages/Book3.jpg') },
    { id: 4, name: 'Psycho',description: 'Description: written by Robert Bloch', price: 10, image: require('./pages/Book4.jpg') },
    { id: 5, name: 'I Know Why the Caged Bird Sings',description: 'Description: written by Maya Angelou', price: 20, image: require('./pages/Book5.jpg') },
    { id: 6, name: 'SlaughterHouse-Five',description: 'Description: written by Kurt Vonnegut.Jr.', price: 30, image: require('./pages/Book6.jpg') },
    
  ];

  //to add books to cart
  const addToCart = (product, quantity) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      // if that particular book already exists in the cart,then update the count of books
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      // if the product is not in the cart, add it with the specified quantity count
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  //to remove books from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  //to update the count of books in cart
  const updateQuantity = (productId, newQuantity) => {
    setCartItems(cartItems.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
  };

  
  const finalizePurchase = () => {
    if (cartItems.length === 0) {
      // if there are no items in cart
      alert('No items in cart.');
    } else {
      // else finalize the purchase
      console.log('Purchase finalized');
      alert('Order confirmed!');
    }
  };


  const createAccount = (formData) => {
    setUser(formData);
    alert('Account created successfully.');
  };

  const updateAccount = (formData) => {
    setUser(formData);
    alert('Account details updated successfully.');
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('productSelection')}>Product Selection</button>
        <button onClick={() => setCurrentPage('shoppingCart')}>Shopping Cart</button>
        <button onClick={() => setCurrentPage('userAccount')}>User Account</button>
      </nav>
      {currentPage === 'productSelection' && <ProductSelectionPage products={products} addToCart={addToCart} />}
      {currentPage === 'shoppingCart' && (
        <ShoppingCartPage
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          finalizePurchase={finalizePurchase}
        />
      )}
      {currentPage === 'userAccount' && (
        <UserAccountPage
          user={user}
          onCreateAccount={createAccount}
          onUpdateAccount={updateAccount}
        />
      )}
    </div>
  );
};

export default App;
