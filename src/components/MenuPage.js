import React, { useState, useEffect } from 'react';
import croissant from '../images/croissant.jpg';
import cupcake from '../images/ cupcake.jpg';
import cakes from '../images/cakes.jpg';
import Bento from '../images/Bento.jpg';
import cookies from '../images/cookies.jpg';
import eclairs from '../images/eclairs.jpg';
import './MenuPage.css';

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const menuItems = [
    { id: 1, name: 'Croissants', price: 20.00, image: croissant },
    { id: 2, name: 'Cupcakes', price: 250.00, image: cupcake },
    { id: 3, name: 'Cakes', price: 450.00, image: cakes },
    { id: 4, name: 'Bento Cakes', price: 300.00, image: Bento },
    { id: 5, name: 'Cookies', price: 150.00, image: cookies },
    { id: 6, name: 'Eclairs', price: 45.00, image: eclairs }
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
  };

  const handleOrder = () => {
    setOrderPlaced(true);
  };

  useEffect(() => {
    if (orderPlaced) {
      console.log('Order placed!');
    }
  }, [orderPlaced]);

  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Menu</h1>
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search menu items"
        className="search-bar"
      />
      <div className="menu-grid-container">
      <ul className="menu-grid">
  {filteredMenuItems.map((item) => (
    <li key={item.id} className="menu-item">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>Price: R{item.price.toFixed(2)}</p>
      <button
        onClick={() => handleAddToCart(item)}
        className="add-to-cart"
      >
        Add to Cart
      </button>
    </li>
  ))}
</ul>
      </div>
      <div className="cart-and-order">
        <div className="cart">
          <h2>Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
                <p>Price: R{item.price.toFixed(2)}</p>
                <button
                  onClick={() => handleRemoveFromCart(item)}
                  className="remove-from-cart"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p>Total: R{cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</p>
          {cart.length > 0 && (
            <button onClick={handleOrder} className="place-order">
              Place Order
            </button>
          )}
          {orderPlaced && (
  <div>
    <h2>Order Placed!</h2>
    <p>Thank you for your order. We'll process it soon.</p>
  </div>
)}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;