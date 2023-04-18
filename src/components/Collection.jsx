import React from "react";

const Collection = () => {
  return (
    <>
      <section
        className="section top-collection"
        aria-labelledby="collection-label"
      >
        <div className="container">
          <div className="title-wrapper">
            <h2
              className="headline-md section-title text-center"
              id="collection-label"
            >
              Top Collections
            </h2>

            <a href="#" className="btn-link link:hover">
              <span className="span">See More</span>

              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>
          </div>

          <div className="slider" data-slider>
            <ul className="slider-container" data-slider-container>
              <li className="slider-item">
                <div className="collection-card card">
                  <figure
                    className="card-banner img-holder"
                    // style="--width: 500; --height: 500;"
                  >
                    <img
                      src="./assets/images/showcase-1.jpg"
                      width="500"
                      height="500"
                      loading="lazy"
                      alt="Digital Collection"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <div className="card-profile">
                      <img
                        src="./assets/images/avatar-1.jpg"
                        width="64"
                        height="64"
                        loading="lazy"
                        alt="CutieGirl profile"
                      />

                      <ion-icon
                        name="checkmark-circle"
                        aria-hidden="true"
                      ></ion-icon>
                    </div>

                    <h3 className="title-md card-title">
                      <a href="#" className="link:hover">
                        Digital Collection
                      </a>
                    </h3>

                    <p className="label-md card-author">
                      by{" "}
                      <a href="#" className="link">
                        @CutieGirl
                      </a>
                    </p>

                    <p className="card-text">25 Items</p>
                  </div>
                </div>
              </li>

              <li className="slider-item">
                <div className="collection-card card">
                  <figure
                    className="card-banner img-holder"
                    // style="--width: 500; --height: 500;"
                  >
                    <img
                      src="./assets/images/showcase-2.jpg"
                      width="500"
                      height="500"
                      loading="lazy"
                      alt="GIF Collection"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <div className="card-profile">
                      <img
                        src="./assets/images/avatar-2.jpg"
                        width="64"
                        height="64"
                        loading="lazy"
                        alt="ButterFly profile"
                      />

                      <ion-icon
                        name="checkmark-circle"
                        aria-hidden="true"
                      ></ion-icon>
                    </div>

                    <h3 className="title-md card-title">
                      <a href="#" className="link:hover">
                        GIF Collection
                      </a>
                    </h3>

                    <p className="label-md card-author">
                      by{" "}
                      <a href="#" className="link">
                        @ButterFly
                      </a>
                    </p>

                    <p className="card-text">25 Items</p>
                  </div>
                </div>
              </li>

              <li className="slider-item">
                <div className="collection-card card">
                  <figure
                    className="card-banner img-holder"
                    // style="--width: 500; --height: 500;"
                  >
                    <img
                      src="./assets/images/showcase-3.jpg"
                      width="500"
                      height="500"
                      loading="lazy"
                      alt="Sports Collection"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <div className="card-profile">
                      <img
                        src="./assets/images/avatar-3.jpg"
                        width="64"
                        height="64"
                        loading="lazy"
                        alt="NorseQueen profile"
                      />

                      <ion-icon
                        name="checkmark-circle"
                        aria-hidden="true"
                      ></ion-icon>
                    </div>

                    <h3 className="title-md card-title">
                      <a href="#" className="link:hover">
                        Sports Collection
                      </a>
                    </h3>

                    <p className="label-md card-author">
                      by{" "}
                      <a href="#" className="link">
                        @NorseQueen
                      </a>
                    </p>

                    <p className="card-text">25 Items</p>
                  </div>
                </div>
              </li>

              <li className="slider-item">
                <div className="collection-card card">
                  <figure
                    className="card-banner img-holder"
                    // style="--width: 500; --height: 500;"
                  >
                    <img
                      src="./assets/images/showcase-4.jpg"
                      width="500"
                      height="500"
                      loading="lazy"
                      alt="Photography Collection"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <div className="card-profile">
                      <img
                        src="./assets/images/avatar-4.jpg"
                        width="64"
                        height="64"
                        loading="lazy"
                        alt="BigBull profile"
                      />

                      <ion-icon
                        name="checkmark-circle"
                        aria-hidden="true"
                      ></ion-icon>
                    </div>

                    <h3 className="title-md card-title">
                      <a href="#" className="link:hover">
                        Photography Collection
                      </a>
                    </h3>

                    <p className="label-md card-author">
                      by{" "}
                      <a href="#" className="link">
                        @BigBull
                      </a>
                    </p>

                    <p className="card-text">25 Items</p>
                  </div>
                </div>
              </li>

              <li className="slider-item">
                <div className="collection-card card">
                  <figure
                    className="card-banner img-holder"
                    // style="--width: 500; --height: 500;"
                  >
                    <img
                      src="./assets/images/showcase-5.jpg"
                      width="500"
                      height="500"
                      loading="lazy"
                      alt="Illustrations Collection"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <div className="card-profile">
                      <img
                        src="./assets/images/avatar-5.jpg"
                        width="64"
                        height="64"
                        loading="lazy"
                        alt="Angel profile"
                      />

                      <ion-icon
                        name="checkmark-circle"
                        aria-hidden="true"
                      ></ion-icon>
                    </div>

                    <h3 className="title-md card-title">
                      <a href="#" className="link:hover">
                        Illustrations Collection
                      </a>
                    </h3>

                    <p className="label-md card-author">
                      by{" "}
                      <a href="#" className="link">
                        @Angel
                      </a>
                    </p>

                    <p className="card-text">25 Items</p>
                  </div>
                </div>
              </li>

              <li className="slider-item">
                <div className="collection-card card">
                  <figure
                    className="card-banner img-holder"
                    // style="--width: 500; --height: 500;"
                  >
                    <img
                      src="./assets/images/showcase-6.gif"
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
                        src="./assets/images/avatar-6.gif"
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
                        Animations Collection
                      </a>
                    </h3>

                    <p className="label-md card-author">
                      by{" "}
                      <a href="#" className="link">
                        @CrazyAnyone
                      </a>
                    </p>

                    <p className="card-text">25 Items</p>
                  </div>
                </div>
              </li>
            </ul>

            <button
              className="slider-btn prev"
              aria-label="Slide to previous item"
              data-slider-prev
            >
              <ion-icon name="chevron-back-sharp" aria-hidden="true"></ion-icon>
            </button>

            <button
              className="slider-btn next"
              aria-label="Slide to next item"
              data-slider-next
            >
              <ion-icon
                name="chevron-forward-sharp"
                aria-hidden="true"
              ></ion-icon>
            </button>
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
