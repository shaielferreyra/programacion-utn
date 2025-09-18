import React from "react";
import "./global1.css";

function Header() {
  return (
    <header>
      <h1>Nuestra pagina web</h1>
      <nav>
        <a href="#about">Sobre</a>
        <a href="#gallery">Galería</a>
        <a href="#services">Servicios</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
