import React from "react";

const Newsletter = () => {
  return (
    <>
      <section className="section newsletter" aria-label="newsletter">
        <div className="container">
          <div className="newsletter-card">
            <div>
              <h3 className="headline-md text-center">
                Subscribe to Newsletter!
              </h3>

              <p className="body-md card-text text-center">
                Subscribe to get latest updates and information.
              </p>
            </div>

            <div className="input-wrapper">
              <input
                type="email"
                name="email_address"
                placeholder="Enter your email :"
                required
                className="input-field"
              />

              <button className="btn btn-primary">Subscribe</button>
            </div>

            <ion-icon
              name="mail-open-outline"
              aria-hidden="true"
              class="bg-icon bg-icon-1"
            ></ion-icon>

            <ion-icon
              name="document-text-outline"
              aria-hidden="true"
              class="bg-icon bg-icon-2"
            ></ion-icon>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
