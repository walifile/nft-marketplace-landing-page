import React from "react";
import { collection } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Collection = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="section top-collection">
        <div className="container">
          <div className="title-wrapper">
            <h2 className="headline-md section-title text-center">
              Top Collections
            </h2>

            <a href="#" className="btn-link link:hover">
              <span className="span">See More</span>

              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>
          </div>

          <div className="slider_wrapper">
            <ul className="slider_container">
              <Slider {...settings}>
                {collection.map((card, index) => (
                  <li className="slider-item" key={index}>
                    <div className="collection-card card">
                      <figure className="card-banner img-holder">
                        <img
                          src={card?.featured_image}
                          width="500"
                          height="500"
                          loading="lazy"
                          alt="Animations Collection"
                          className="img-cover"
                        />
                      </figure>

                      <div className="card-content">
                        <div className="card-profile">
                          <img
                            src={card?.avatar}
                            width="64"
                            height="64"
                            loading="lazy"
                            alt="CrazyAnyone profile"
                          />

                          <ion-icon
                            name="checkmark-circle"
                            aria-hidden="true"
                          ></ion-icon>
                        </div>

                        <h3 className="title-md card-title">
                          <a href="#" className="link:hover">
                            {card?.name}
                          </a>
                        </h3>

                        <p className="label-md card-author">
                          by{" "}
                          <a href="#" className="link">
                            {card?.creator}
                          </a>
                        </p>
                        <p className="card-text">{card?.items} Items</p>
                      </div>
                    </div>
                  </li>
                ))}
              </Slider>
            </ul>
          </div>

          <a href="#" className="btn-link link:hover">
            <span className="span">See More</span>

            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>
        </div>
      </section>
    </>
  );
};

export default Collection;
