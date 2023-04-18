import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Collection from "./components/Collection";
import Items from "./components/Items";
import Creator from "./components/Creator";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Collection />
      <Items />
      <Creator />
      <Contact />
      <Newsletter />
      <Footer />
      <div className="body-bg-shape"> </div>
    </>
  );
}

export default App;
