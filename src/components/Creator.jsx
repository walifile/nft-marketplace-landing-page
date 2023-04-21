import React from "react";
import { creator_data } from "../data";
const Creator = () => {
  return (
    <>
      <section className="section sellers" aria-labelledby="sellers-label">
        <div className="container">
          <h2
            className="headline-md section-title text-center"
            id="sellers-label"
          >
            Best Creators & Sellers
          </h2>

          <ul className="grid-list">
            {creator_data.map((card, index) => (
              <li key={index}>
                <div className="seller-card card">
                  <figure className="card-banner">
                    <img
                      src={card?.avatar}
                      width="64"
                      height="64"
                      loading="lazy"
                      alt="Steven Townsend profile"
                    />

                    <ion-icon name="checkmark-circle"></ion-icon>
                  </figure>

                  <div className="card-title-wrapper">
                    <h3 className="title-sm">
                      <a href="#" className="link:hover">
                        {card?.title}
                      </a>
                    </h3>

                    <p className="user-name label-md">@{card?.artist}</p>
                  </div>

                  <button
                    className="btn-icon outline"
                    aria-label="Hire Steven Townsend"
                  >
                    <ion-icon name="person-add-outline"></ion-icon>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Creator;
