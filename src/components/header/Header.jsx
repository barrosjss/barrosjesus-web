import React, { useState } from "react";
import "./header.css";

const Header = () => {
  /*=========================== TOGGLE MENU ===========================*/
  const [Toggle, showMenu] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav_logo">
            Barros
          </a>

          <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
            <ul className="nav_list grid">
              <il className="nav_item">
                <a href="#portfolio" className="nav_link">
                  <i className="uil uil-scenery nav_icon"></i> Inicio
                </a>
              </il>
              <il className="nav_item">
                <a href="#portfolio" className="nav_link">
                  <i className="uil uil-scenery nav_icon"></i> Portafolio
                </a>
              </il>
              <il className="nav_item">
                <a href="https://medium.com/@barrosjss" target="_blank" className="nav_link">
                  <i className="uil uil-scenery nav_icon"></i> Blog
                </a>
              </il>
              <il className="nav_item">
                <a href="#contact" className="nav_link">
                  <i className="uil uil-message nav_icon"></i> Contacto
                </a>
              </il>
            </ul>
            <il
              className="uil uil-times nav_close"
              onClick={() => showMenu(!Toggle)}
            ></il>
          </div>
          <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
            <il className="uil uil-apps"></il>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
