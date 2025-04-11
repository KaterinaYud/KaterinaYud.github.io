import React, { useEffect } from 'react';
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

const faqData = [
  {
    icon: "📲",
    question: "Як замовити доставку через Novafood?",
    answer:
      "Ви можете замовити доставку на офіційному сайті. Для цього потрібно вибрати страви, вказати адресу та спосіб оплати.",
  },
  {
    icon: "⏰",
    question: "Який час доставки?",
    answer:
      "Час доставки залежить від вашого місцезнаходження, але зазвичай це займає від 30 до 60 хвилин.",
  },
  {
    icon: "💴",
    question: "Як оплатити замовлення?",
    answer:
      "Ви можете оплатити замовлення карткою онлайн або готівкою при отриманні.",
  },
  {
    icon: "🌐",
    question: "Які райони обслуговує Novafood?",
    answer:
      "Novafood надає послуги доставки в межах Львова та його околиць, зокрема в такі райони: Львів, Брюховичі, Винники, Сокільники.",
  },
  {
    icon: "🍽️",
    question: "Що можна вибрати для замовлення в Novafood?",
    answer:
      "В асортименті Novafood ви знайдете піцу, свіжі салати, суші, гарячі страви, освіжаючі напої та неймовірно смачні десерти, що задовольнять будь-які смакові побажання.",
  },
];

const Home = () => {
  useEffect(() => {
    const homeStyleLink = document.getElementById('home-style');
    if (homeStyleLink) {
      homeStyleLink.disabled = false;
    }

    return () => {
      if (homeStyleLink) {
        homeStyleLink.disabled = true; 
      }
    };
  }, []);
  
  return (
    <>
      <MainHeader />
      <main>
        <section>
          <div>
            <h2 className="name__desc">Доставка їжі Львів</h2>
            <p className="desc__element">Графік роботи: з 10:00 до 23:00.</p>
            <p className="desc__element">
              Фотографії продуктів несуть ознайомчий характер і можуть
              відрізнятися від оригіналу.
            </p>
            <p className="desc__element">
              Замовлення вважається прийнятим з моменту опрацювання його
              оператором колл-центру.
            </p>
            <p className="desc__element">
              Хочете смачно поїсти, але не маєте часу на приготування? NovaFood
              подбає про це! Замовляйте улюблені страви – наші кур’єри доставлять
              їх швидко та ще гарячими прямо до ваших дверей. Смакуйте без зайвих
              клопотів!
            </p>
          </div>
        </section>

        <section>
          <div className="faq__container">
            {faqData.map((item, index) => (
              <label className="faq__item" key={index}>
                <input type="checkbox" />
                <div className="faq__question">
                  <span className="question__text">{item.icon} {item.question}</span>
                  <span className="arrow">▼</span>
                </div>
                <div className="faq__answer">{item.answer}</div>
              </label>
            ))}
          </div>
        </section>
      </main>
      <MainFooter />
    </>
  );
};

export default Home;

