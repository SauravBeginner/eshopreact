import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer py-5 bg-dark">
        <div className="container">
          <div className="row">
            <div className="footer-col-1">
              <h3>Download Our App</h3>
              <p>Download App for Android and ios Mobile Phone </p>
              <div className="app-logo">
                <Link to="https://play.google.com/store">
                  <img src="images/play-store.png" />
                </Link>
                <Link to="https://www.apple.com/in/app-store/">
                  <img src="images/app-store.png" />
                </Link>
              </div>
            </div>
            <div className="footer-col-2">
              <img src="images/logo-white.png" />
              <p>
                Our Purpose Is To Sustainably Make The Pleasure and Benifits of
                Sports Accesible To the Many
              </p>
            </div>
            <div className="footer-col-3">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <Link to="/">Coupons</Link>
                </li>
                <li>
                  <Link to="/">Blog Post</Link>
                </li>
                <li>
                  <Link to="/">Return Policy</Link>
                </li>
                <li>
                  <Link to="/">Join Affilate</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col-4">
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <Link to="https://facebook.com/" className="fa fa-facebook">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://twitter.com/?lang=en"
                    className="fa fa-twitter"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/this_is_saurav_96/"
                    className="fa fa-instagram"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="https://www.youtube.com/" className="fa fa-youtube">
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="m-0 text-center text-white">
            Copyright &copy; RedStore 2021
          </p>
        </div>
      </footer>
      <div
        className="modal fade"
        id="logoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  localStorage.removeItem("jtoken");
                  window.location = "/";
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
