import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
// import featuredProductApi from "./featuredProductApi";
const Latest_Products = () => {
  let [product, setProduct] = useState([]);
  let [count, setCount] = useState(0);
  let [qty, setQty] = useState(1);
  let [cid, setCid] = useState("");
  let [to, setTo] = useState(0);
  const getData = async () => {
    var resp = await fetch("http://localhost:5000/product/select");
    var data = await resp.json();
    setProduct(data);
  };

  async function getu() {
    var tk = localStorage.getItem("jtoken");
    if (tk != null) {
      var resp = await fetch("http://localhost:5000/customer/customerdetails", {
        headers: {
          Authorization: "Bearer " + tk,
        },
      });
      var data = await resp.json();
      setCid(data.id);
    } else {
      setCid("");
    }
  }
  async function gettotla() {
    var resp = await fetch("http://localhost:5000/cart/totalorder");
    var data = await resp.json();

    setTo(data.to);
  }

  useEffect(() => {
    // document.title = `Eshop(${count})`;
    gettotla();
    getu();
    getData();
  }, [to]);
  return (
    <>
      <Navbar totalo={to} key={to} />
      <section className="py-5">
        <h2 className="title">Latest Products</h2>
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {product.map((currentElement) => {
              return (
                <>
                  {currentElement.type === "latest" ? (
                    <div className="col-md-6 products" key={currentElement._id}>
                      <div className="card h-100">
                        <img
                          className="card-img-top"
                          src={
                            "http://localhost:5000/productImg/" +
                            currentElement.pimg
                          }
                        />

                        <div className="card-body">
                          <div className="text-center">
                            z
                            <h4 className="fw-bolder">
                              <Link
                                to={"/single_product/" + currentElement._id}
                              >
                                {currentElement.name}
                              </Link>
                            </h4>
                            <h5 className="fw-bolder">
                              {currentElement.price}
                            </h5>
                          </div>
                        </div>
                        <div className="rating d-flex justify-content-center small text-warning mb-2">
                          {currentElement.rating === 5 ? (
                            <>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </>
                          ) : currentElement.rating === 4 ? (
                            <>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </>
                          ) : currentElement.rating === 3 ? (
                            <>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </>
                          ) : currentElement.rating === 2 ? (
                            <>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </>
                          ) : (
                            <>
                              <i className="fa fa-star"></i>
                            </>
                          )}
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center row">
                            <p>
                              <input
                                className="form-control text-center me-3"
                                type="number"
                                min="1"
                                max="5"
                                defaultValue="1"
                                onChange={(event) => {
                                  setQty(event.target.value);
                                }}
                              />
                            </p>
                            <p>
                              {cid ? (
                                <button
                                  className="btn"
                                  onClick={async () => {
                                    var fd = new FormData();
                                    fd.append("cid", cid);
                                    fd.append("pid", currentElement._id);
                                    fd.append("qty", qty);
                                    fd.append("price", currentElement.price);
                                    var resp = await fetch(
                                      "http://localhost:5000/cart/addCart",
                                      {
                                        method: "POST",
                                        body: fd,
                                      }
                                    );
                                    var data = await resp.json();
                                    console.log(data);
                                    gettotla();
                                  }}
                                >
                                  Add to Cart
                                </button>
                              ) : (
                                ""
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Latest_Products;
