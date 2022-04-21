import { React, useState, useContext } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import routMapMini from "../Routes/Routemapmini";
import { BaseContext } from "../../BaseContextProvider";

const Otpverify = () => {
  const {
    mobilenm,
    setMobilenm,
    devotename,
    setDevoteName,
    password,
    setPassWord,
  } = useContext(BaseContext);

  const [phone, setPhone] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
//send register details






//

    console.log(`Form submitted, ${phone}`);
  };

  return (
    <div className="sd-verify-main">
      <h1>number:{mobilenm}</h1>
      <h1>name:{devotename}</h1>
      <h1>password:{password}</h1>
      <h1>OTP number:{phone}</h1>

      <h2>
        Verify with <span>OTP</span>
      </h2>
      <h3>
        <span>OTP sent to ::</span>
        <button>
          <Link to={routMapMini.SignUpPage}>Not your number</Link>
        </button>
      </h3>
      <div className="otp">
        <form onSubmit={handleSubmit}>
          <label>Enter otp</label>

          <input
            onChange={(e) => setPhone(e.target.value)}
            //value={this.state.form.message}
            type="text"
            className="phone validate"
            name="phone"
            maxLength={4}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Otpverify;
