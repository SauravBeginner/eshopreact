import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
const OrderHistory = () => {
  let [product, setProduct] = useState([]);
  let [count, setCount] = useState(0);
  let [cid, setCid] = useState("");
  let [gt, setGt] = useState("");

  async function getu() {
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
      setCid(data.id);
    } else {
      setCid("");
    }
  }
  const getData = async () => {
    if (cid != null) {
      var fd = new FormData();
      fd.append("cid", cid);
      var resp = await fetch(
        "https://eshopbacnkend.herokuapp.com/cart/viewsorder",
        {
          method: "POST",
          body: fd,
        }
      );
      var data = await resp.json();
      console.log(data);

      setProduct(data);
    }
  };
  useEffect(() => {
    getu();

    getData();
  }, [cid]);
  return (
    <>
      <Navbar />
      <div className="container">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>price</th>
              <th>Quantity</th>
              <th>Total Price</th>
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
                      "https://eshopbacnkend.herokuapp.com/productImg/" +
                      currentElement.pimg
                    }
                  />
                </td>
                <td>{currentElement.price}</td>
                <td>{currentElement.quantity}</td>
                <td>{currentElement.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderHistory;
