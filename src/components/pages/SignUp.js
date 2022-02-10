import React from "react";
import { useState } from "react";

const SignUp = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  let [cpassword, setcPassword] = useState("");
  return (
    <>
      <div className="sign-up-form">
        <div className="group">
          <label for="user" className="label">
            Name
          </label>
          <input
            id="user"
            type="text"
            className="input"
            placeholder="Enter your Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="group">
          <label for="email" className="label">
            Email
          </label>
          <input
            id="email"
            type="text"
            className="input"
            placeholder="Enter your Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="group">
          <label for="phone" className="label">
            Phone
          </label>
          <input
            id="phone"
            type="text"
            className="input"
            placeholder="Enter your Mobile Number"
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>
        <div className="group">
          <label for="pass" className="label">
            Password
          </label>
          <input
            id="pass"
            type="password"
            className="input"
            data-type="password"
            placeholder="Enter your Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="group">
          <label for="pass" className="label">
            Confirm Password
          </label>
          <input
            id="pass"
            type="password"
            className="input"
            data-type="password"
            placeholder="Confirm your Password"
            onChange={(event) => {
              setcPassword(event.target.value);
            }}
          />
        </div>

        <div className="group">
          <button
            type="submit"
            className="button"
            onClick={async () => {
              var fd = new FormData();
              fd.append("name", name);
              fd.append("email", email);
              fd.append("phone", phone);
              fd.append("password", password);
              fd.append("cpassword", cpassword);

              var result = await fetch(
                "https://eshopbacnkend.herokuapp.com/customer/register",
                {
                  method: "POST",
                  body: fd,
                }
              );

              var data = await result.json();
              console.log(data);
              window.location = "/";
            }}
          >
            SignUp
          </button>
        </div>
        <div className="hr"></div>
        <div className="foot">
          <label for="tab-1">Already Member?</label>
        </div>
      </div>
    </>
  );
};

export default SignUp;
