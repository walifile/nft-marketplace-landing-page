import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="section footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="#">
                <img
                  src="./assets/images/logo-small.svg"
                  width="126"
                  height="28"
                  loading="lazy"
                  alt="home"
                />
              </a>

              <p className="body-md footer-text">
                Buy, sell and discover exclusive digital assets by the top
                artists of NFTs world.
              </p>
            </div>

            <ul className="footer-list">
              <li>
                <p className="title-lg footer-list-title">Market Place</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Explore Item</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Live Auction</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Activities</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Wallets</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Creators</span>
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="title-lg footer-list-title">Useful Links</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">About Us</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Blog & News</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Terms & Condition</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Privacy policy</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Login</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Contact Us</span>
                </a>
              </li>
            </ul>

            <div className="footer-list">
              <ul>
                <li>
                  <p className="title-lg footer-list-title">
                    Download the web3 app
                  </p>
                </li>

                <li className="footer-list-item">
                  <a href="#">
                    <img
                      src="./assets/images/appstore.png"
                      width="134"
                      height="40"
                      loading="lazy"
                      alt="Download Metalink app from AppStore"
                    />
                  </a>

                  <a href="#">
                    <img
                      src="./assets/images/playstore.png"
                      width="134"
                      height="40"
                      loading="lazy"
                      alt="Download Metalink app from PlayStore"
                    />
                  </a>
                </li>
              </ul>

              <ul>
                <li>
                  <p className="title-lg footer-list-title">Contact Details</p>
                </li>

                <li className="footer-list-item">
                  <ion-icon name="mail-outline"></ion-icon>

                  <a href="mailto:metalink@nft.com" className="footer-link">
                    web3@nft.com
                  </a>
                </li>

                <li className="footer-list-item">
                  <ion-icon name="call-outline"></ion-icon>

                  <a href="tel:+111 234-567-891" className="footer-link">
                    +111 234-567-891
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="body-md text-center copyright">
              &copy; 2023 web3. Developed with <span className="span">❤</span>{" "}
              by codingcirculate.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
