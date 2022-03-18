import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../Pages/About";
import Donations from "../Pages/Donations";
import MediaRoom from "../Pages/MediaRoom";
import OnlineBooking from "../Pages/OnlineBooking";
import Sevas from "../Pages/Sevas";
import Support from "../Pages/Support";
import routMapMini from "./Routemapmini";

const RouterList = () => {
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
          <Route path={routMapMini.AboutPage} element={<About />} />
          <Route path={routMapMini.DonationPage} element={<Donations />} />
          <Route path={routMapMini.MediaRoomPage} element={<MediaRoom />} />
          <Route path={routMapMini.SevasPage} element={<Sevas />} />
          <Route
            path={routMapMini.OnlineBookingPage}
            element={<OnlineBooking />}
          />
          <Route path={routMapMini.SupportPage} element={<Support />} />
        </Routes>
      </div>
    </Router>
  );
};

export default RouterList;
