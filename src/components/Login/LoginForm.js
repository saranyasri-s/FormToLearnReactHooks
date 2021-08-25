import React, { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./LoginForm.module.css";
function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const ctx = useContext(AuthContext);
  const addEmailHandler = (e) => {
    setEmail(e.target.value);
    if (e.target.value.includes("@")) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };
  const addPasswordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.trim().length > 6) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    if (!isEmailValid || !isPasswordValid) {
      return;
    }
    ctx.onLogin();
    console.log(email, password);
  };
  const emailBlurIsValidHandler = () => {
    if (email.includes("@")) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };
  const passwordBlurHandler = () => {
    if (password.trim().length > 6) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };
  return (
    <form onSubmit={loginSubmitHandler} className={classes.LoginForm}>
      <div>
        <label>Email</label>
        <input
          className={`${!isEmailValid ? classes["invalid"] : null}`}
          onChange={addEmailHandler}
          type="email"
          onBlur={emailBlurIsValidHandler}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          className={`${!isPasswordValid ? classes["invalid"] : null}`}
          onChange={addPasswordHandler}
          type="password"
          onBlur={passwordBlurHandler}
        ></input>
      </div>
      <button
        className={`${classes["button"]} ${
          !isEmailValid || !isPasswordValid ? classes["invalid"] : null
        }`}
        type="submit"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
