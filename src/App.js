import React from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import LoginForm from "./components/Login/LoginForm";
function App() {
  const LoginHandler = () => {
    console.log(true);
  };
  return (
    <>
      <Header></Header>
      <main>
        <LoginForm onLogin={LoginHandler}></LoginForm>
      </main>
    </>
  );
}

export default App;
