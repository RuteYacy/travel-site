import React from "react";
import Activites from "./components/Activites";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero />
      <Activites />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
