import React from "react";
import "./login.css";
import img1 from "../Assets/images/sd-signin-image.jpg";
const Login = () => {
  return (
    <div className="sd-login-main">
      <div className="sd-l-left">
        <h2>Sign in</h2>
        <h3>Login to your account</h3>
        <form>
          <div className="number">
            <label htmlFor="number">Mobile number</label>
            <input type="number" placeholder="enter number" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="enter password" />
          </div>
          <p className="forgot">
            <a href="">Forgot Password?</a>
          </p>
          <button>Sign in</button>
          <p className="help">
            Have trouble signing in?
            <span>
              <a href="" style={{color:"#2f3193"}}>Get Help</a>
            </span>
          </p>
        </form>
        <div className="sd-l-leftbottom">
          <p>
            Dont have an account ?<a href="">Sign Up</a>
          </p>
        </div>
      </div>
      <div className="sd-l-right">
        <img src={img1} alt="signin img" />
      </div>
    </div>
  );
};

export default Login;
