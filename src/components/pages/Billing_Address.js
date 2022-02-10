import React, { useState } from "react";
const Billing_Address = () => {
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [phone, setPhone] = useState("");

  return (
    <>
      <div className="form-group">
        <label for="exampleInputName"> Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          placeholder="Enter Customer Name"
          onChange={(event) => {
            setName(event.target.value);
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
            setAddress(event.target.value);
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
            setPhone(event.target.value);
          }}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={async () => {
          var fd = new FormData();
          fd.append("name", name);
          fd.append("address", address);
          fd.append("phone", phone);

          var resp = await fetch("http://localhost:5000/Customer/add", {
            method: "POST",
            body: fd,
          });

          var data = await resp.json();

          console.log(data);
        }}
      >
        Submit
      </button>
    </>
  );
};

export default Billing_Address;
