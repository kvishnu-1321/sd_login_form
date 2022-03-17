import React from "react";
import About from "./Pages/About";
import Donations from "./Pages/Donations";
import MediaRoom from "./Pages/MediaRoom";
import OnlineBooking from "./Pages/OnlineBooking";
import Sevas from "./Pages/Sevas";
import Support from "./Pages/Support";

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
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/mediaroom" element={<MediaRoom />} />
          <Route path="/sevas" element={<Sevas />} />
          <Route path="/onlinebooking" element={<OnlineBooking />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navbar;
