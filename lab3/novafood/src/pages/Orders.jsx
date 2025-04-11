import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Orders = () => {
  const orders = [
    {
      date: "1 березня 2025",
      items: [
        { name: "Цезар", price: 200, img: "/assets/img/salat-tsezar.jpg" },
        { name: "Лимонад", price: 55, img: "/assets/img/napoi-limaad.jpg" },
      ],
      totalPrice: 255,
    },
    {
      date: "15 січня 2025",
      items: [
        { name: "Філадельфія", price: 220, img: "/assets/img/sushi-filad.jpg" },
      ],
      totalPrice: 220,
    },
    {
      date: "3 грудня 2024",
      items: [
        { name: "Чизкейк", price: 160, img: "/assets/img/desert-cheesecake.jpg" },
        { name: "Лате", price: 75, img: "/assets/img/napoi-late.avif" },
        { name: "Американо", price: 60, img: "/assets/img/napoi-americano.jpg" },
      ],
      totalPrice: 295,
    },
  ];
  useEffect(() => {
    const styleLink = document.getElementById("orders-style");
    if (styleLink) styleLink.disabled = false;
    return () => {
      if (styleLink) styleLink.disabled = true;
    };
  }, []);
  return (
    <div className="orders">
      <Header
        title="Мої замовлення"
        subtitle="Твої подорожі у світ смаку! 😋"
      />
      <main>
        <div className="container">
          <h1 className="name__container">Мої замовлення</h1>
          <div className="order-list">
            {orders.map((order, index) => (
              <div className="order" key={index}>
                <div className="order-date">{order.date}</div>
                <div className="order-items">
                  {order.items.map((item, i) => (
                    <div className="order-item" key={i}>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="item-image"
                      />
                      <span>{item.name}</span>
                      <span className="item-price">{item.price} ₴</span>
                    </div>
                  ))}
                </div>
                <div className="total-price">
                  <span>Загальна сума: </span>
                  <span className="price">{order.totalPrice} ₴</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Orders;
