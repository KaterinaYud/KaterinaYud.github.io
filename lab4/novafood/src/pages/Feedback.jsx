import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Feedback = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [reviews, setReviews] = useState([]);

  const defaultReviews = [
    { name: "Олена", text: "Смачна піца, швидка доставка!" },
    { name: "Андрій", text: "Чудові суші, рекомендую!" },
  ];

  useEffect(() => {
    const tempReviews = JSON.parse(sessionStorage.getItem("tempReviews")) || [];
    setReviews([...defaultReviews, ...tempReviews]);

    const feedbackStyleLink = document.getElementById("feedback-style");
    if (feedbackStyleLink) feedbackStyleLink.disabled = false;

    const interval = setInterval(() => {
      const updated = JSON.parse(sessionStorage.getItem("tempReviews")) || [];
      setReviews([...defaultReviews, ...updated]);
    }, 3000);

    return () => {
      clearInterval(interval);
      if (feedbackStyleLink) feedbackStyleLink.disabled = true;
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || message.trim() === "") {
      alert("Будь ласка, заповніть всі поля.");
      return;
    }

    const newReview = { name, text: message };
    const updatedReviews = JSON.parse(sessionStorage.getItem("tempReviews")) || [];
    updatedReviews.push(newReview);
    sessionStorage.setItem("tempReviews", JSON.stringify(updatedReviews));
    setReviews([...reviews, newReview]);
    setName("");
    setMessage("");
    alert("Ваш відгук додано!");
  };

  return (
    <div className="feedback">
      <Header
        title="Відгуки"
        subtitle="Ваша думка важлива для нас – допоможіть нам стати ще кращими! 🍽"
      />
      <main>
        <div className="container">
          <h1>Ваш відгук</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Ім'я:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="message">Залиште Ваш коментар:</label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit">Надіслати</button>
          </form>
        </div>
      </main>
      <Footer /></div>
  );
};

export default Feedback;
