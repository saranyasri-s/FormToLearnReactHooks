import React from "react";
import classes from "./Navigation.module.css";
function Navigation(props) {
  const logOutHandler = () => {
    props.onLogOut();
  };
  return (
    <div className={classes.navigation}>
      <a href="#">fgujf</a>
      <a href="#">dhfhdfh</a>
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  );
}

export default Navigation;
