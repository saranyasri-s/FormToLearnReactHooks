import React, { useState } from "react";
import classes from "./LoginForm.module.css";
function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const addEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const addPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    props.onLogin();
    console.log(email, password);
  };
  return (
    <form onSubmit={loginSubmitHandler} className={classes.LoginForm}>
      <label>Email</label>
      <input onChange={addEmailHandler} type="email"></input>
      <label>Password</label>
      <input onChange={addPasswordHandler} type="password"></input>
      <button type="submit"> Login</button>
    </form>
  );
}

export default LoginForm;
