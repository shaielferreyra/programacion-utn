import React from "react";
import "./person2.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <form>
        <input type="text" placeholder="Tu nombre" /><br />
        <input type="email" placeholder="Tu email" /><br />
        <textarea placeholder="Tu mensaje"></textarea><br />
        <button>Enviar</button>
      </form>
    </section>
  );
}

export default Contact;