import React from "react";

const Banner = () => {
  return (
    <>
      <section className="section hero" aria-label="home">
        <div className="container">
          <h1 className="headline-lg hero-title">
            Discover rate collection or{" "}
            <span className="span">Arts & NFTs</span>
          </h1>

          <p className="section-text body-lg">
            We are a huge marketplace dedicated to connecting great artists of
            all web3 with their fans and unique token collectors!
          </p>

          <a href="#" className="btn">
            Explore now
          </a>
        </div>
      </section>
    </>
  );
};

export default Banner;
