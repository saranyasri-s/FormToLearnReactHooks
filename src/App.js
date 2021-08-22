import React, { useState } from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import LoginForm from "./components/Login/LoginForm";
import WelcomePage from "./components/WelcomePage/WelcomePage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const LoginHandler = () => {
    setIsLoggedIn(true);
  };
  const logOutHandler = () => {
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
