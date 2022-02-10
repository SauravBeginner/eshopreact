import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import Products from "Products";
//import productApi from "./productApi";
const Single_Product = (props) => {
  let [product, setProduct] = useState([]);
  let [qty, setQty] = useState(1);
  let [cid, setCid] = useState("");

  const getData = async () => {
    const productId = props.match.params.id;
    var fd = new FormData();
    fd.append("id", productId);
    var resp = await fetch("http://localhost:5000/product/pdetails", {
      method: "POST",
      body: fd,
    });
    var data = await resp.json();

    console.log(data);
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
  useEffect(() => {
    // document.title = `Eshop(${count})`;
    getu();
    getData();
  }, []);
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={"http://localhost:5000/productImg/" + product.pimg}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <h1 className="display-5 fw-bolder">{product.name}</h1>
              <div className="fs-5 mb-5">
                <h4>{product.price}</h4>
              </div>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium at dolorem quidem modi. Nam sequi consequatur
                obcaecati excepturi alias magni, accusamus eius blanditiis
                delectus ipsam minima ea iste laborum vero?
              </p>
              <div className="d-flex row text-center">
                <div className="col-lg-8 col-md-12">
                  <input
                    className="form-control text-center me-3"
                    id="inputQuantity"
                    type="number"
                    min="1"
                    max="5"
                    defaultValue="1"
                    onChange={(event) => {
                      setQty(event.target.value);
                    }}
                  />
                </div>
                <div className="col-lg-4  col-md-12">
                  <button
                    className="btn btn-outline-dark flex-shrink-0"
                    type="button"
                    onClick={async () => {
                      console.log(product.price);
                      var fd = new FormData();
                      fd.append("cid", cid);
                      fd.append("pid", product._id);
                      fd.append("qty", qty);
                      fd.append("price", product.price);
                      var resp = await fetch(
                        "http://localhost:5000/cart/addCart",
                        {
                          method: "POST",
                          body: fd,
                        }
                      );
                      var data = await resp.json();
                      console.log(data);
                    }}
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Single_Product;
