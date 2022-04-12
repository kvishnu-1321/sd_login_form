import { React, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
//import { Link } from "react-router-dom";
// import {useHistory} from "react-router-dom"
import routMapMini from "./Routes/Routemapmini";


import axios from "axios";
import { useFormik } from "formik";
import "./login.css";
import img1 from "../Assets/images/sd-signin-image.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Login = () => {
  // const history=useHistory();
  // useEffect(()=>{
  //   if(localStorage.getItem('user-info')){
  //     history.push("/about")
  //   }
  // })
  const [phone, setPhone] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    onSubmit: (values) => {
      console.log("hiii");
      console.log("form submit", values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.phone) {
        errors.name = "Mobile number Required";
      }
      if (!values.email) {
        errors.email = "Email Required";
      }
      if (!values.password) {
        errors.password = "Password Required";
      }
      return errors;
    },
  });

  const onSubmit = async (values) => {
    console.log(formik.initialValues);
    let item = { values };
    const response = await axios
      .post("https://ts-api.srisailadevasthanam.org/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(item),
      })
      .catch((err) => {
        if (err && err.response);
      });

    if (response) {
      alert("Welcome back in. Authenticating...");
    }
  };

  return (
    <div className="sd-login-main">
      <div className="sd-l-left">
        <h2>Sign in</h2>
        <h3>Login to your account</h3>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="number">
            <label htmlFor="number">Mobile Number</label>

            <PhoneInput
              className="react-tel-input"
              country={"in"}
              name="phone"
              value={formik.values.phone}
              //onChange={(e) => setPhone( e.target.value)}
              onChange={formik.handleChange}
            />
            {formik.errors.name ? (
              <div className="errors">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="password">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password ? (
              <div className="errors">{formik.errors.password}</div>
            ) : null}
          </div>

          <p className="forgot">
            <a href="#">Forgot Password?</a>
          </p>
          <button onSubmit={onSubmit}>Sign in</button>
          <p className="help">
            Have trouble signing in?
            <span>
              <a href="#" style={{ color: "#2f3193" }}>
                Get Help
              </a>
            </span>
          </p>
        </form>
        <div className="sd-l-leftbottom">
          <p>
            Dont have an account ?
            <Link to={routMapMini.SignUpPage}>
              <a type="submit">Sign Up</a>
            </Link>
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
