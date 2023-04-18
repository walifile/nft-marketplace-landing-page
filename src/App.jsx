import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Collection from "./components/Collection";
import Items from "./components/Items";
function App() {
  return (
    <>
      <Navbar />

      <Banner />
      <Collection />
      <Items />
      <div className="body-bg-shape"> </div>
    </>
  );
}

export default App;
