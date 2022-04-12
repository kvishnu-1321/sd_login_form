import React from "react";
import RouterList from "./Routes/Routes";
import { BrowserRouter as Router, Link } from "react-router-dom";
import routMapMini from "./Routes/Routemapmini";

import "./Navbar.css";

const Navbar = () => {
  return (
    <Router>
      <div className="sd-navbar">
        <nav>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to={routMapMini.AboutPage}> About </Link>
            </li>
            <li>
              <Link to={routMapMini.DonationPage}> Donations </Link>
            </li>
            <li>
              <Link to={routMapMini.SevasPage}> sevas and darshanam </Link>
            </li>
            <li>
              <Link to={routMapMini.OnlineBookingPage}> Online Booking </Link>
            </li>
            <li>
              <Link to={routMapMini.MediaRoomPage}> Media Room </Link>
            </li>
            <li>
              <Link to={routMapMini.SupportPage}> Support</Link>
            </li>

            <li>
              <Link to={routMapMini.SignInPage}>sign in/sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
      <RouterList />
    </Router>
  );
};

export default Navbar;
