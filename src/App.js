import React from "react";
import classes from "./App.module.css";
import LoginForm from "./components/Login/LoginForm";
function App() {
  const LoginHandler = () => {
    console.log(true);
  };
  return (
    <>
      <header></header>
      <main>
        <LoginForm onLogin={LoginHandler}></LoginForm>
      </main>
    </>
  );
}

export default App;
