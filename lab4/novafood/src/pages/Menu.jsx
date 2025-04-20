import React, { useState, useEffect } from "react";
import MainHeader from "../components/Header";
import MainFooter from "../components/Footer";
import MenuCategory from "../components/MenuCategory";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Усі");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const menuRef = collection(db, "menu");
      const snapshot = await getDocs(menuRef);
      const flatMenu = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      const grouped = flatMenu.reduce((acc, item) => {
        const category = item.category || "Інше";
        const existing = acc.find(cat => cat.category === category);
        if (existing) {
          existing.items.push(item);
        } else {
          acc.push({ category, items: [item] });
        }
        return acc;
      }, []);
      setMenuItems(grouped);
    };
    fetchMenu();
  }, []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);

    const menuStyleLink = document.getElementById("menu-style");
    if (menuStyleLink) {
      menuStyleLink.disabled = false;
    }

    const tempReviews = JSON.parse(sessionStorage.getItem("tempReviews")) || [];
    const defaultReviews = [
      { name: "Олена", text: "Смачна піца, швидка доставка!" },
      { name: "Андрій", text: "Чудові суші, рекомендую!" },
    ];
    setReviews([...defaultReviews, ...tempReviews]);

    return () => {
      if (menuStyleLink) menuStyleLink.disabled = true;
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      let updatedCart;

      if (existing) {
        updatedCart = prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedCart = [...prev, { ...item, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const categories = ["Усі", ...menuItems.map((cat) => cat.category)];
  const filteredMenu =
    activeCategory === "Усі"
      ? menuItems
      : menuItems.filter((cat) => cat.category === activeCategory);

  return (
    <div className="menu">
      <MainHeader title="Меню" subtitle="Обирай, що з’явиться перед тобою швидше, ніж ти встигнеш зголодніти!" />

      <div className="menu-layout">
        <aside className="feedback-panel">
          <h3>Відгуки</h3>
          <ul>
            {reviews.map((review, i) => (
              <li key={i}>
                <strong>{review.name}</strong>: {review.text}
              </li>
            ))}
          </ul>
        </aside>

        <div className="categories-and-menu">
          <div className="categories">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "active" : ""}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredMenu.map((category, index) => (
            <MenuCategory
              key={index}
              category={category.category}
              items={category.items}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>

      <a href="/basket" className="cart-button">Кошик 🛒</a>
      <MainFooter />
    </div>
  );
};

export default Menu;

