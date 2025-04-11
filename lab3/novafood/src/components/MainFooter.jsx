const MainFooter = () => (
  <footer>
    <div className="footer__container">
      <div className="footer__part">
        <h3 className="name__part">Адреса</h3>
        <ul className="list__part">
          <li className="element__list__part">м. Львів, вул. Садова 2</li>
          <li className="element__list__part">м. Львів, вул. Галицька 48а</li>
          <li className="element__list__part">м. Винники, вул. І. Франка 19б</li>
          <li className="element__list__part">с. Сокільники, вул. Г. Сковороди 38</li>
          <li className="element__list__part">с. Брюховичі, вул. Львівська 12</li>
        </ul>
      </div>

      <div className="footer__part">
        <h3 className="name__part">Зробити замовлення</h3>
        <ul className="list__part">
          <li className="element__phone">+38(068) 154 20 87</li>
          <li className="element__phone">+38(096) 253 20 77</li>
          <li className="element__phone">+38(063) 848 31 05</li>
          <li className="element__phone">+38(044) 102 00 37</li>
        </ul>
      </div>

      <div className="footer__part">
        <h3 className="name__part">Є що сказати чи запропонувати?</h3>
        <a href="/feedback" className="button__media">Напиши нам</a>
        <ul className="list__part">
          <li className="element__media">
            <img src="/assets/img/telegram.png" alt="Telegram" />
            NovaFood_UA_bot
          </li>
          <li className="element__media">
            <img src="/assets/img/insta.png" alt="Instagram" />
            novafood_lviv
          </li>
          <li className="element__media">
            <img src="/assets/img/gmail.png" alt="Gmail" />
            novafood@gmail.com
          </li>
          <li className="element__media">
            <img src="/assets/img/facebook.png" alt="Facebook" />
            Novafood Львів
          </li>
          <li className="element__media">
            <img src="/assets/img/tiktok.png" alt="TikTok" />
            novafood
          </li>
        </ul>
      </div>
    </div>
    <h3 className="footer__copyright">© NovaFood - Смак, що випереджає час! 2025</h3>
  </footer>
);

export default MainFooter;
