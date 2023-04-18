import React from "react";

const Navbar = () => {
  return (
    <>
      <header class="header" data-header>
        <div class="container">
          <a href="#">
            <img
              src="/assets/images/logo-small.svg"
              width="40"
              height="40"
              alt="Metalink home"
              class="logo-small"
            />
            <img
              src="/assets/images/logo.svg"
              width="126"
              height="28"
              alt="Metalink home"
              class="logo"
            />
          </a>

          <nav class="navbar" data-navbar>
            <ul class="navbar-list">
              <li>
                <a href="#" class="navbar-link label-lg link:hover">
                  Home
                </a>
              </li>

              <li>
                <a href="#" class="navbar-link label-lg link:hover">
                  Explore
                </a>
              </li>

              <li>
                <a href="#" class="navbar-link label-lg link:hover">
                  Wallet
                </a>
              </li>

              <li>
                <a href="#" class="navbar-link label-lg link:hover">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" class="navbar-link label-lg link:hover">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div class="header-action">
            <button class="btn-icon primary" aria-label="wallet">
              <ion-icon name="wallet-outline"></ion-icon>
            </button>

            <button
              class="btn-icon profil-btn"
              aria-label="Metalink account: Fiona doe"
            >
              <img
                src="/assets/images/profile.jpg"
                width="50"
                height="50"
                alt="Fiona doe"
                class="img-cover"
              />
            </button>

            <button
              class="nav-toggle-btn"
              aria-label="menu toggle"
              data-nav-toggler
            >
              <ion-icon
                name="menu-outline"
                aria-hidden="true"
                class="default-icon"
              ></ion-icon>

              <ion-icon
                name="close-outline"
                aria-hidden="true"
                class="active-icon"
              ></ion-icon>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
