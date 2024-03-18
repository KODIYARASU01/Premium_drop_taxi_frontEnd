import React, { useState } from "react";
import "./Navbar.scss";
import logo from "/src/assets/booking/4.svg";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  let [navSlide, setNavSlide] = useState(false);
  return (
    <>
      <div className="navbar_container">
        <div className="left">
          <div className="bars" onClick={()=>setNavSlide(!navSlide)}>
            {navSlide ? (
              <i className="uil uil-times"></i>
            ) : (
              <i className="uil uil-bars"></i>
            )}
          </div>

          <img src={logo} alt="logo" />
        </div>
        <div className="right" id={navSlide === true ? "slideOpen" : "slideClose"}>
          <ul>
            <NavLink to="/" onClick={()=>setNavSlide(false)}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/about" onClick={()=>setNavSlide(false)}>
              <li>About</li>
            </NavLink>
            <NavLink to="/service" onClick={()=>setNavSlide(false)}>
              <li>Service</li>
            </NavLink>
            <NavLink to="/contact" onClick={()=>setNavSlide(false)}>
              <li>Contact Us</li>
            </NavLink>
            <NavLink to="/admin" onClick={()=>setNavSlide(false)}>
              <li>Admin</li>
            </NavLink>
          </ul>
        </div>
        <div className="login">
          <Link>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
