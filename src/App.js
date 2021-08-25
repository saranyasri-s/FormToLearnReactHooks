import React, { useState, useEffect } from "react";
import AuthContext from "../src/store/auth-context";
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
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: LoginHandler,
        onLogOut: logOutHandler,
      }}
    >
      <Header></Header>
      <main>
        {!isLoggedIn && <LoginForm></LoginForm>}
        {isLoggedIn && <WelcomePage></WelcomePage>}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
