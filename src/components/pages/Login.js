import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isErr, setIsErr] = useState(false);
  let [isCorrect, setIsCorrect] = useState(false);
  return (
    <>
      {isErr ? (
        <div class="alert alert-danger">
          <strong>Error!</strong> Invalid Login!
        </div>
      ) : (
        ""
      )}
      {isCorrect ? (
        <div class="alert alert-success">
          <strong>Succesfull!</strong> Login!
        </div>
      ) : (
        ""
      )}
      <div className="login">
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
          <input id="check" type="checkbox" className="check" checked />
          <label for="check">
            <span className="icon"></span> Keep me Signed in
          </label>
        </div>
        <div className="group">
          <input
            type="submit"
            className="button"
            value="Sign In"
            onClick={async () => {
              var fd = new FormData();

              fd.append("email", email);
              fd.append("password", password);

              var result = await fetch("http://localhost:5000/customer/login", {
                method: "POST",
                body: fd,
              });
              var data = await result.json();
              console.log(data);

              if (data.err == "Invalid") {
                localStorage.removeItem("jtoken");
                window.location = "/account";
                setIsErr(true);
              } else {
                setIsCorrect(true);
                localStorage.setItem("jtoken", data.token);
                window.location = "/";
                console.log(data.token);
              }
            }}
          />
        </div>
        <div className="hr"></div>
        <div className="foot">
          <Link to="/">Forgot Password?</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
