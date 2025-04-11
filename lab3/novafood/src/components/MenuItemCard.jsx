import React, { useState } from 'react';

const MenuItemCard = ({ menuItem, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const menuItemWithQuantity = { ...menuItem, quantity: 1 }; 
    onAddToCart(menuItemWithQuantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  return (
    <div className="container menu-item-card">
      <img src={menuItem.img} alt={menuItem.name} />
  
      <div className="menu-item-content">
        <h2>{menuItem.name}</h2>
        <p className="description">{menuItem.description}</p>
      </div>
  
      <div className="menu-item-bottom">
        <div className="menu-item-price">{menuItem.price}₴</div>
        <button
        onClick={handleAddToCart}
        className="add-to-cart-button"
        style={{
          backgroundColor: isAdded ? "#fff0f5" : "",
          color: isAdded ? "#600d39" : "",
          border: isAdded ? "2px solid #f6c8d5" : "",
          transition: "all 0.3s",
        }}
        >
        {isAdded ? "Додано" : "Додати в кошик"}
      </button>
      </div>
    </div>
  );
  
};

export default MenuItemCard;
