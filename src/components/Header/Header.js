import React from "react";
import classes from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
function Header(props) {
  return (
    <div className={classes.Header}>
      <h3>A Typical Page</h3>
      <Navigation> </Navigation>
    </div>
  );
}

export default Header;
