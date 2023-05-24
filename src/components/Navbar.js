import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

function Navbar() {
  return (
    <div className="flex gap-5 bg-gray-800">
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy"></img>
      </Link>
      <nav>
        <ul className="flex gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
