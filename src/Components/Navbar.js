import React from "react";
import RouterList from "./Routes/Routes";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <Router>
      <div className="sd-navbar">
        <nav>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/donations"> Donations </Link>
            </li>
            <li>
              <Link to="/sevas"> sevas and darshanam </Link>
            </li>
            <li>
              <Link to="/onlinebooking"> Online Booking </Link>
            </li>
            <li>
              <Link to="/mediaroom"> Media Room </Link>
            </li>
            <li>
              <Link to="/support"> Support</Link>
            </li>
          </ul>
        </nav>
      
        <RouterList />
      </div>
    </Router>
  );
};

export default Navbar;

