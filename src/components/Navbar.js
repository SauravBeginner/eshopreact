import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  let [isLogIn, setIsLogIn] = useState(false);
  let [uname, setUname] = useState("");

  async function getUser() {
    var tk = localStorage.getItem("jtoken");
    if (tk != null) {
      var resp = await fetch(
        "https://eshopbacnkend.herokuapp.com/customer/customerdetails",
        {
          headers: {
            Authorization: "Bearer " + tk,
          },
        }
      );
      var data = await resp.json();
      setUname(data.name);
      setIsLogIn(true);

      if (data.msg === "Access Denied") {
        window.location = "/";
      }
    } else {
      setUname("");
      setIsLogIn(false);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="/">
            <img src="images/logo.png" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/allproducts">
                      All Products
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/featured">
                      Featured Products
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/latest">
                      Latest Products
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about/abc">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about/xyz">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add_products">
                  Add Products
                </Link>
              </li>
              {isLogIn ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/orders">
                    My Orders
                  </Link>
                </li>
              ) : (
                " "
              )}
            </ul>
            <ul className="d-flex">
              <li className="mr-2">
                <Link className="btn btn-outline-dark" to="/cart">
                  <i className="bi-cart-fill me-1"></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">
                    {props.totalo}
                  </span>
                </Link>
              </li>
              <li className="ml-2 nav-item dropdown no-arrow">
                <button
                  className="btn nav-link dropdown-toggle"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  to="/account"
                >
                  <i class="fas fa-user"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <Link className="dropdown-item" to="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    {isLogIn ? (
                      uname
                    ) : (
                      <Link to="/account">Register / LogIn</Link>
                    )}
                  </Link>
                  <Link className="dropdown-item" to="/address">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Address
                  </Link>
                  <Link className="dropdown-item" to="/settings">
                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                  </Link>
                  <div className="dropdown-divider"></div>
                  {isLogIn ? (
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        window.alert("Do you want to Logout");
                        localStorage.removeItem("jtoken");
                        window.location = "/account";
                      }}
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
