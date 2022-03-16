import React from "react";
import  "./Navbar.css";

const Navbar = () => {
  return (
    <div className="sd-navbar">
      <nav>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Sevas & Darshanam</a>
          </li>
          <li>
            <a href="">Donations</a>
          </li>
          <li>
            <a href="">Online Booking</a>
          </li>
          <li>
            <a href="">Media Room</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
