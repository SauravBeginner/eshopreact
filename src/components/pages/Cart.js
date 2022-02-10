import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
const Cart = () => {
  let [product, setProduct] = useState([]);
  let [count, setCount] = useState(0);
  let [cid, setCid] = useState("");
  let [gt, setGt] = useState("");
  let [to, setTo] = useState(0);
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
  const getData = async () => {
    var fd = new FormData();
    fd.append("cid", cid);
    var resp = await fetch("http://localhost:5000/cart/viewcart", {
      method: "POST",
      body: fd,
    });
    var data = await resp.json();
    console.log(data);
    setProduct(data.prod);
    setGt(data.gt);
  };
  async function gettotla() {
    var resp = await fetch("http://localhost:5000/cart/totalorder");
    var data = await resp.json();

    setTo(data.to);
  }
  useEffect(() => {
    getu();
    // document.title = `Eshop(${count})`;
    getData();
    gettotla();
  }, [to]);

  return (
    <>
      <Navbar totalo={to} key={to} />
      <div className="container">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((currentElement) => (
              <tr key={currentElement._id}>
                <td>{currentElement.pname}</td>
                <td>
                  <img
                    className="cartimg"
                    src={
                      "http://localhost:5000/productImg/" + currentElement.pimg
                    }
                  />
                </td>
                <td>{currentElement.price}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    defaultValue={currentElement.quantity}
                    onChange={async (ev) => {
                      var fd = new FormData();
                      fd.append("id", currentElement.id);
                      fd.append("price", currentElement.price);
                      fd.append("qty", ev.target.value);
                      var resp = await fetch(
                        "http://localhost:5000/cart/update",
                        {
                          method: "POST",
                          body: fd,
                        }
                      );
                      var data = await resp.json();
                      console.log(data);
                      getData();
                    }}
                  />
                </td>
                <td>{currentElement.totalPrice}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={async () => {
                      if (window.confirm("Are you sure")) {
                        var fd = new FormData();
                        fd.append("id", currentElement.id);
                        var resp = await fetch(
                          "http://localhost:5000/cart/delete",
                          {
                            method: "POST",
                            body: fd,
                          }
                        );
                        var data = await resp.json();

                        console.log(data);
                        getData();
                      }
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <th colSpan="4">Grand total</th>
              <th colSpan="">{gt}</th>
              <th>
                <Link className="btn btn-sm" to="/address">
                  Checkout
                </Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
