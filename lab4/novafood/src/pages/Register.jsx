import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import MainHeader from "../components/Header";
import MainFooter from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const authStyle = document.getElementById("auth-style");
    if (authStyle) authStyle.disabled = false;
    return () => {
      if (authStyle) authStyle.disabled = true;
    };
  }, []);
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("❗ Всі поля обов’язкові для заповнення.");
      return;
    }
    if (!validateEmail(email)) {
      setMessage("❗ Введіть коректну електронну пошту.");
      return;
    }
    if (password.length < 6) {
      setMessage("❗ Пароль має містити щонайменше 6 символів.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("✅ Реєстрація успішна!");
      setTimeout(() => {
        navigate("/menu");
      }, 1500);
    } catch (error) {
      console.error(error.code);
      switch (error.code) {
        case "auth/email-already-in-use":
          setMessage("❌ Цей email вже використовується. Спробуйте увійти.");
          break;
        case "auth/invalid-email":
          setMessage("❌ Невірний формат email.");
          break;
        case "auth/weak-password":
          setMessage("❌ Пароль занадто слабкий.");
          break;
        default:
          setMessage("❌ Сталася помилка. Спробуйте пізніше.");
      }
    }
  };
  return (
    <div className="auth-container">
      <MainHeader title="Реєстрація" subtitle="Зареєструйся — і хай смачно буде завжди!" />
      <h1>Реєстрація в NovaFood</h1>
      <form onSubmit={handleRegister}>
        <label>Email:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} required />
        <label>Пароль:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Зареєструватися</button>
        {message && <p>{message}</p>}
      </form>
      <MainFooter />
    </div>
  );
};

export default Register;

