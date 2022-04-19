import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { withRouter } from "react-router";
//import { Link} from "react-router-dom";
// import {useHistory} from "react-router-dom"
import routMapMini from "../Routes/Routemapmini";
import axios from "axios";
import { useFormik } from "formik";
import "./Signup.css";
import img1 from "../../Assets/images/sd-signin-image.jpg";

import { EncryptInformation } from "./Encriptphonenum";

const Signup = (props) => {
  console.log(props);
  const SITE_KEY = "6LfKG_QaAAAAAI9rFw0CjwXxTjEUWZkCMzVqyba6";
  const [loading, setLoading] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const [errArray, setErrArray] = useState([]);
  const [selectedlanguage, setSelectedlanguage] = useState("en-in");

  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    };

    // load the script by passing the URL
    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
      function () {
        // console.log("Script loaded!");
      }
    );
  }, []);

  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      Confirmpassword: "",
      phone: "",
    },
    // onSubmit: (values) => {
    //   console.log("hiii");
    //   console.log("form submit", values);
    // },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "please enter the name";
      }
      if (!values.phone) {
        errors.phone = "Mobile number Required";
      }

      if (!values.password) {
        errors.password = "Password Required";
      }
      if (!values.Confirmpassword) {
        errors.Confirmpassword = "Confirm Password Required";
      }
      return errors;
    },

    onSubmit: async (values) => {
      console.log("kkkkkkkkkk");

      //console.log(formik.initialValues);
      try {
        let item = { values };
        console.log(values.phone);
        const response = await axios.get(
          `https://ts-api.srisailadevasthanam.org/user/is-registered?phone=%2B${values.phone}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(" heloo hiii");
        window.grecaptcha.ready(async () => {
          console.log(" heloo hiii");
          window.grecaptcha
            .execute(SITE_KEY, { action: "submit" })
            .then(async (token) => {
              try {
                //axios.post(https://ts-api.srisailadevasthanam.org/comms/send-otp

                //  let res = await CommsService.sendOtp(
                //    `+${values.phone}`,
                //    "register",
                //    token
                //  );

                let res = await axios.post(
                  `https://ts-api.srisailadevasthanam.org/comms/send-otp`,
                  {
                    phone: EncryptInformation(`+91${values.phone}`),
                    type: "register",
                    captcha_human_key: token,
                  },

                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
                if (res) {
                  setLoading(false);
                  seterrorMessage("");
                  //props?.history?.push(`routMapMini.AboutPage`);
                  // <Redirect to="routMapMini.AboutPage" />;
                  navigate(routMapMini.OtpverifyPage);
                }
              } catch (e) {
                let data = [...errArray];
                data.push({
                  type: "common",
                  msg: e?.message,
                });
                setErrArray(data);
                setLoading(false);
                seterrorMessage("");
                // console.log(e);
              }
            });
        });
      } catch (err) {
        if (err && err.response);
      }
    },
  });

  return (
    <div className="sd-login-main">
      <div className="sd-l-left">
        <h2>Sign up</h2>
        <h3>Create an account</h3>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="signiup_details">
            <div className="signup_top">
              <div className="password">
                <label>Display Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.errors.name ? (
                  <div className="errors">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="number">
                <label>Mobile Number</label>

                <input
                  //className="react-tel-input"
                  placeholder="enter mobile number"
                  country={"in"}
                  type="number"
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  //onChange={(e) => setPhone( e.target.value)}
                  onChange={formik.handleChange}
                />
                {formik.errors.phone ? (
                  <div className="errors">{formik.errors.phone}</div>
                ) : null}
              </div>
            </div>
            <div className="signup_bottom">
              <div className="password">
                <label>Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.errors.password ? (
                  <div className="errors">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="password">
                <label>Confirm Password</label>
                <input
                  type="password"
                  id="Confirmpassword"
                  name="Confirmpassword"
                  value={formik.values.Confirmpassword}
                  onChange={formik.handleChange}
                />
                {formik.errors.Confirmpassword ? (
                  <div className="errors">{formik.errors.Confirmpassword}</div>
                ) : null}
              </div>
            </div>
          </div>
          <button type="submit">Sign up</button>
        </form>
        <div className="sd-l-leftbottom">
          <p>
            Already have an account ?
            <Link to={routMapMini.SignInPage}>
              <a>Sign in</a>
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

export default Signup;
