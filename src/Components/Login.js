import React from "react";

const Login = ({ setIsLogInTrue }) => {
  return (
    <div className="main">
      {/* <div className="logo"></div> */}

      <div className="login">
        <div className="header-main">
          <h3 className="welcome-text">WELCOME BACK </h3>
          <h3 className="header-text">Log into your account</h3>
        </div>

        <div className="form">
          <div className="email">
            <lable className="label">Email or userName</lable>
            <input
              className="input-field"
              placeholder="Enter Your EmailId or userName"
              type="text"
            ></input>
          </div>

          <div className="email">
            <div className="label-container">
              <label className="label">Password</label>
              <label className="label">Forgot Password</label>
            </div>

            <input
              className="input-field"
              placeholder="Enter Your Password"
              type="password"
            ></input>
          </div>
        </div>

        <button className="btn">Login Now</button>

        <div className="footer">
          <p className="footer-text" onClick={() => setIsLogInTrue("Register")}>
            Not Registered yet? Register{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
