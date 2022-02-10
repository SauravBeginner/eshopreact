import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";

const Address = () => {
  let [bname, setBname] = useState("");
  let [baddress, setBaddress] = useState("");
  let [bphone, setBphone] = useState("");
  let [sname, setSname] = useState("");
  let [saddress, setSaddress] = useState("");
  let [sphone, setSphone] = useState("");
  let [cid, setCid] = useState("");

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

  function ckall(ev) {
    if (ev.target.checked == true) {
      setSname(bname);
      setSaddress(baddress);
      setSphone(bphone);
    } else {
      setSname("");
      setSaddress("");
      setSphone("");
    }
  }

  useEffect(() => {
    getu();
  }, [cid]);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row py-2 my-2">
          <div className="col-md-6 col-sm-12">
            <h3 className="text-center">Billing Address</h3>
            <p>Please Insert Correct Info</p>
            <div className="form-group">
              <label for="exampleInputName"> Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                placeholder="Enter Customer Name"
                onChange={(event) => {
                  setBname(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputaddress"> Address Line 1</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputAddress"
                placeholder="Enter Customer address"
                onChange={(event) => {
                  setBaddress(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputaddress"> Mobile</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPhone"
                placeholder="Enter Customer Mobile Number"
                onChange={(event) => {
                  setBphone(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <h3 className="text-center">Shipping Address</h3>
            <p>
              <input type="checkbox" onChange={ckall} /> Same as billing address
            </p>
            <div className="form-group">
              <label for="exampleInputName"> Name</label>
              <input
                defaultValue={sname}
                type="text"
                className="form-control"
                id="exampleInputName"
                placeholder="Enter Customer Name"
                onChange={(event) => {
                  setSname(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputaddress"> Address Line 1</label>
              <input
                defaultValue={saddress}
                type="text"
                className="form-control"
                id="exampleInputAddress"
                placeholder="Enter Customer address"
                onChange={(event) => {
                  setSaddress(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputaddress"> Mobile</label>
              <input
                defaultValue={sphone}
                type="text"
                className="form-control"
                id="exampleInputPhone"
                placeholder="Enter Customer Mobile Number"
                onChange={(event) => {
                  setSphone(event.target.value);
                }}
              />
            </div>
          </div>{" "}
          <button
            type="submit"
            className="btn btn-primary col-sm-3"
            onClick={async () => {
              var fd = new FormData();
              fd.append("bname", bname);
              fd.append("baddress", baddress);
              fd.append("bphone", bphone);
              fd.append("cid", cid);
              fd.append("sname", sname);
              fd.append("saddress", saddress);
              fd.append("sphone", sphone);

              var resp = await fetch("http://localhost:5000/cart/morder", {
                method: "POST",
                body: fd,
              });

              var data = await resp.json();

              console.log(data);
              localStorage.setItem("orderId", data.orderId);
              localStorage.setItem("totalamnt", data.totalamnt);
              localStorage.setItem("bname", data.bname);
              window.location = "/payment";
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Address;
