import React from "react";
//Shaiel componentes
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
//Delfina componentes
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
//Ruben componentes
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <About />
      <Gallery />
      <Services />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
