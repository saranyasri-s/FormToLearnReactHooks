import React from "react";
import classes from "./Navigation.module.css";
function Navigation(props) {
  const logOutHandler = () => {
    props.onLogOut();
  };
  return (
    <div className={classes.navigation}>
      <a>fgujf</a>
      <a>dhfhdfh</a>
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  );
}

export default Navigation;
