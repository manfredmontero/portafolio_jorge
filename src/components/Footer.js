import React from "react";
import logolink from '../images/linkdln.png'
import logoGit from '../images/github.jpg'

function Footer() {
  return (
    <div className="container mt-5">
      <div className="text-center p-4 footer-div">
        <div>© 2021 Copyright: Jorge Montero
            <hr/>
            <a href="https:www.linkedin.com/in/jorge--montero" target="_blank" >
                <img src={logolink} className="logo-footer"/>
            </a>
            <a href="https:www.linkedin.com/in/jorge--montero" target="_blank" >
                <img src={logoGit} className="logo-footer"/>
            </a>

        </div>


      </div>
      <div></div>
    </div>
  );
}

export default Footer;
