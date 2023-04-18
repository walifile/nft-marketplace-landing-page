import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Collection from "./components/Collection";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <article>
          <Banner />
          <Collection />
        </article>
      </main>
    </>
  );
}

export default App;
