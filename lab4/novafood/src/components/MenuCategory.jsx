import React from "react";
import MenuItemCard from "./MenuItemCard"; 

const MenuCategory = ({ category, items, onAddToCart }) => {
  return (
    <div className="menu-category">
      <h2>{category}</h2>
      <div className="menu-items">
        {items.map((item, index) => (
          <MenuItemCard
            key={index}
            menuItem={item}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;

