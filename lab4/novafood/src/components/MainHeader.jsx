import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom"; 

const MainHeader = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <header>
      <div className="header__container">
        <img
          className="header__logo"
          src="/assets/img/logo.jpg"
          alt="Зображення не завантажено"
        />
        <nav className="header__menu">
          <ul className="menu__list">
            <li><Link className="menu__link" to="/menu">Меню</Link></li>
            <li><Link className="menu__link" to="/basket">Кошик</Link></li>
            <li><Link className="menu__link" to="/orders">Мої замовлення</Link></li>
          </ul>
        </nav>

        {}
        <div className="header__auth">
          {user ? (
            <>
              <span className="user__email">Привіт, {user.email}</span>
              <button className="logout__button" onClick={handleLogout}>Вийти</button>
            </>
          ) : (
            <>
              <Link className="auth__link" to="/login">Увійти</Link>
              <Link className="auth__link" to="/register">Реєстрація</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
