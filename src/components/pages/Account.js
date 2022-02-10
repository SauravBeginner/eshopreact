import React from "react";

import Login from "./Login";
import SignUp from "./SignUp";

const Account = () => {
  return (
    <>
      <div className="row p-3">
        <div className="col-md-6 ">
          <div className="d-flex justify-content-center">
            <div className="login-box">
              <div className="login-snip">
                <input
                  id="tab-1"
                  type="radio"
                  name="tab"
                  className="sign-in"
                  checked
                />
                <label for="tab-1" className="tab">
                  Login
                </label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <label for="tab-2" className="tab">
                  Sign Up
                </label>
                <div className="login-space">
                  <Login />
                  <SignUp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
