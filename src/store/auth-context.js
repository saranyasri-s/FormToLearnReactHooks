import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogOut: () => {},
  OnLogin: () => {},
});

export default AuthContext;
