import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="test-6xl font-bold text-center">
        Our Contact information
      </h1>
      <div className="hero w-full">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="test-4xl font-semibold text-center">Contact Us</h1>
            <p className="py-6 text-center">
              <address>
                Collage para, Tangail<br></br>Bangladesh
              </address>
            </p>
            <p className="text-center">
              Phone Number:{" "}
              <span className="text-center text-orange-700">+8801234567</span>
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <p className="test-4xl font-semibold">
                Subscribe Us to get latest offer
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <label className="input-group">
                  <span>Email</span>
                  <input
                    type="text"
                    placeholder="info@site.com"
                    className="input input-bordered"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
