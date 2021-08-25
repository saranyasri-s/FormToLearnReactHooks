import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./Navigation.module.css";
function Navigation(props) {
  const ctx = useContext(AuthContext);
  return (
    <div className={classes.navigation}>
      <a href="#">Profile</a>
      <a href="#">Notifications</a>
      <button onClick={ctx.onLogOut}>Log Out</button>
    </div>
  );
}

export default Navigation;
