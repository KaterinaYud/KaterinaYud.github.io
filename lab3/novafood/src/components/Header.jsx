const Header = ({ title, subtitle }) => (
    <header>
      <div className="header__container">
        <img className="header__logo" src="/assets/img/logo.jpg" alt="Зображення не завантажено" />
        <div className="header__world">
          <h2>
            {title} <span className="divider"><span><h2>✓</h2></span></span>
            <a href="/" className="home-link">на головну</a>
          </h2>
          <h4><i>{subtitle}</i></h4>
        </div>
      </div>
    </header>
  );
  
  export default Header;
  