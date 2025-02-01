import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import Pictures from "./components/Pictures/Pictures";
import ReservationInfo from "./components/ReservationInfo/ReservationInfo";
import Navbar from "./components/Navbar/Navbar";
import Videos from "./components/Video/Videos";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Navbar />
      <section id="ubicacion">
        <Hero />
      </section>
      <section id="fotos">
        <Pictures />
      </section>
      <section id="videos">
        <Videos />
      </section>
      <section id="servicios">
        <Services />
      </section>
      <section id="precio">
        <Banner />
      </section>
      <section id="reserva">
      <ReservationInfo />
      </section>
      
      <Subscribe />
  
      <Footer />
    </main>
  );
};

export default App;
