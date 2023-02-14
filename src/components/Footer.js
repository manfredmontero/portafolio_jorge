import React from "react";
import logolink from "../images/linkdln.png";
import logoGit from "../images/github.png";

function Footer() {
  return (
    <div className="centerdiv text-center mt-5">
      <div className=" p-4 footer-div">
        <div className="footer-small-container">
          © 2023 Copyright: Jorge Montero
          <hr />
          <a href="https:www.linkedin.com/in/jorge--montero" target="_blank">
            <img
              src="https://spng.pngfind.com/pngs/s/57-572039_12-linkedin-icon-flat-images-round-daily-dot.png"
              className="logo-footer"
            />
          </a>
          <a
            href="https://github.com/manfredmontero"
            target="_blank"
            className=" ms-5"
          >
            <img
              src="https://w7.pngwing.com/pngs/12/369/png-transparent-black-and-white-cat-illustration-github-computer-icons-icon-design-github-cat-like-mammal-carnivoran-logo.png"
              className="logo-footer"
            />
          </a>
          <a
            href="mailto:jmontero0590@icloud.com?subject=I Came from your personal portafolio"
            className=" ms-5"
          >
            <img
              src="https://cdn4.vectorstock.com/i/1000x1000/03/68/envelope-icon-mail-symbol-black-silhouette-vector-20390368.jpg"
              className="logo-footer"
            />
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
