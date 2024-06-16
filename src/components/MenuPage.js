import React, { useState, useEffect } from 'react';
import croissant from '../images/croissant.jpg';
import muffin from '../images/muffin.jpg';
import cake from '../images/cake.jpg';
import bread from '../images/bread.jpg';
import pastry from '../images/pastry.jpg';
import './MenuPage.css';

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const menuItems = [
    { id: 1, name: 'Croissant', price: 25.00, image: croissant },
    { id: 2, name: 'Muffin', price: 17.50, image: muffin },
    { id: 3, name: 'Cake', price: 40.00, image: cake },
    { id: 4, name: 'Bread', price: 20.00, image: bread },
    { id: 5, name: 'Pastry', price: 35.00, image: pastry },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (item) => {
    setCart(cart.filter((i) => i.id!== item.id));
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
        </div>
        {orderPlaced && (
          <p>Thank you for your order!</p>
        )}
        {cart.length > 0 && (
          <button onClick={handleOrder} className="place-order">
            Place Order
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuPage;