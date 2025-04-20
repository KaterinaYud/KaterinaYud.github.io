import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import MainHeader from "../components/Header";
import MainFooter from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("✅ Вхід успішний!");
      setTimeout(() => {
        navigate("/menu");
      }, 1500);
    } catch (error) {
      console.error(error.code);
  
      if (error.code === "auth/user-not-found" || error.code === "auth/invalid-credential") {
        setMessage("❌ У вас поки немає акаунта. Зареєструйтесь!");
        setTimeout(() => {
          navigate("/register");
        }, 1500);
        return;
      }
  
      switch (error.code) {
        case "auth/wrong-password":
          setMessage("❌ Невірний пароль. Спробуйте ще раз.");
          break;
        case "auth/invalid-email":
          setMessage("❌ Невірний формат email.");
          break;
        default:
          setMessage("❌ Сталася помилка. Спробуйте пізніше.");
      }
    }
  };

  return (
    <div className="auth-container">
      <MainHeader title="Вхід" subtitle="Кошик сумує без тебе. Заходь скоріше!"/>
      <h1>Вхід до NovaFood</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} required />
        <label>Пароль:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Увійти</button>
        {message && <p>{message}</p>}
      </form>
      <MainFooter />
    </div>
  );
};

export default Login;



