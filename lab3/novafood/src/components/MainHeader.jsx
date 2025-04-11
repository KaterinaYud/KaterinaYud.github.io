const MainHeader = () => (
  <header>
    <div className="header__container">
      <img className="header__logo" src="/assets/img/logo.jpg" alt="Зображення не завантажено" />
      <nav className="header__menu">
        <ul className="menu__list">
          <li><a className="menu__link" href="/menu">Меню</a></li>
          <li><a className="menu__link" href="/basket">Кошик</a></li>
          <li><a className="menu__link" href="/orders">Мої замовлення</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default MainHeader;
