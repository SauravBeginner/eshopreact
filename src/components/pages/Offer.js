import React from "react";
import { Link } from "react-router-dom";
const Offer = () => {
  return (
    <>
      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src="images/exclusive.png" className="offer-img" />
            </div>
            <div className="col-2">
              <p>Exclusively Available on RedStore</p>
              <h2>Mi Smart Band 4</h2>
              <small>
                M4 Smart Watch Blood Pressure Monitor Bracelet Heart Rate
                Monitor Band Pedometer Sleep Monitoring Bluetooth Waterproof
                Mobile Fitness Tracker.
              </small>
              <br />
              <Link className="btn" to="/">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
