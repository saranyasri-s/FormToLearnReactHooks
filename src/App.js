import React, { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import LoginForm from "./components/Login/LoginForm";
import WelcomePage from "./components/WelcomePage/WelcomePage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const isLoggedInFromLocalStorage = localStorage.getItem("isLoggedIn");
    if (isLoggedInFromLocalStorage === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const LoginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  const logOutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <>
      <Header onLogOut={logOutHandler}></Header>
      <main>
        {!isLoggedIn && <LoginForm onLogin={LoginHandler}></LoginForm>}
        {isLoggedIn && <WelcomePage></WelcomePage>}
      </main>
    </>
  );
}

export default App;
