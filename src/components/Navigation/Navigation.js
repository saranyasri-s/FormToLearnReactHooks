import React from "react";
import classes from "./Navigation.module.css";
function Navigation(props) {
  const logOutHandler = () => {
    props.onLogOut();
  };
  return (
    <div className={classes.navigation}>
      <a href="#">Profile</a>
      <a href="#">Notifications</a>
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  );
}

export default Navigation;
