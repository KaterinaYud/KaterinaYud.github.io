import React, { useState, useEffect } from "react";
import MainHeader from "../components/Header";
import MainFooter from "../components/Footer";

const Basket = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    calculateTotal(savedCart);
    startTimer(); 

    const basketStyleLink = document.getElementById("basket-style");
    if (basketStyleLink) basketStyleLink.disabled = false;

    return () => {
      if (basketStyleLink) basketStyleLink.disabled = true;
    };
  }, []);

  const calculateTotal = (cart) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    calculateTotal(newCart);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    updateCart(updatedCart);
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updateCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateCart(updatedCart);
    }
  };

  const handleCheckout = () => {
    alert("Замовлення оформлено! Очікуваний час доставки: 1 хвилина.");
    localStorage.removeItem("cart");
    const emptyCart = [];
    setCart(emptyCart);
    setTotalPrice(0);
    const deliveryEndTime = new Date().getTime() + 1 * 60 * 1000;
    localStorage.setItem("deliveryEndTime", deliveryEndTime);
    startTimer();
  };

  const startTimer = () => {
    const timerElement = document.getElementById("timer");
    const deliveryEndTime = localStorage.getItem("deliveryEndTime");

    if (!timerElement) return;

    if (!deliveryEndTime) {
      timerElement.textContent = "--:--";
      return;
    }

    function updateTimer() {
      const currentTime = new Date().getTime();
      const remainingTime = deliveryEndTime - currentTime;
      if (remainingTime <= 0) {
        timerElement.textContent = "Замовлення доставлено!";
        localStorage.removeItem("deliveryEndTime");
        return;
      }
      const minutes = Math.floor(remainingTime / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
      setTimeout(updateTimer, 1000);
    }

    updateTimer();
  };

  return (
    <div className="basket">
      <MainHeader title="Кошик" subtitle="Твоє замовлення майже тут. Час готуватися до насолоди! 🔮" />

      {cart.length === 0 ? (
        <p>Поки тут порожньо... Чекаємо на Ваше наступне замовлення! ✨</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <span>{item.price * item.quantity} ₴</span>
              </div>
              <div className="item-actions">
                <div className="quantity-control">
                  <button onClick={() => decreaseQuantity(index)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(index)}>+</button>
                </div>
                <button onClick={() => handleRemoveItem(index)}>Видалити</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>До сплати: {totalPrice} ₴</h3>
          <button onClick={handleCheckout}>Оформити замовлення</button>
        </div>
      )}
      <h3 id='text-timer'>Час очікування:</h3>
      <div id="timer" >--:--</div>
      <MainFooter />
    </div>
  );
};

export default Basket;

