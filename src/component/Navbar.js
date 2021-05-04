import React from "react";
import "./Navbar.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check"></input>
      <div className="nav-header">
        <div className="nav-title">yahgrovest</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Save</a>
        <a href="#">Tribe</a>
        <a href="#">Testimonials</a>
        <a href="#">FAQs</a>
      </div>
      <button className="passion-btn flex animate-bounce outline-none w-52 h-12  border rounded-3xl  ">
        Sign Up/Sign In
        <FaLongArrowAltRight className="ml-2  mt-1" />
      </button>
    </div>
  );
};

export default Navbar;
