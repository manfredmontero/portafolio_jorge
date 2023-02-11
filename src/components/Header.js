import React from "react";
import logo from '../images/logo_proyecto.png' 

function Header() {
  return (
    <div className="container header-div">
      <img src={logo} className="imagen-logo"/>
    </div>
  );
}

export default Header;
