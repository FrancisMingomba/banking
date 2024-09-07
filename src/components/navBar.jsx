import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/navBarStyle.css";
import IMAGE from '../images/newImage.png'

const NavBar = ({ user }) => {
  return (
  
    <nav  className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <img src={IMAGE} alt="" />
          <NavLink className="nav-item nav-link" to="/home">

            <p id="bank">Bank</p>
          </NavLink>
          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                <p id="borrow">Borrow</p>
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                <p id="invest">Invest & Insure</p>
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                <p id="connect">Connect</p>
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                <p id="login">Login</p>
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                <div className="">
                  <script   src="https://kit.fontawesome.com/a076d05339.js"></script>
                  <input type="text" placeholder="search..."></input>
                  <i className="fas fa-search"></i>
                </div>
              </NavLink>
            </React.Fragment>
          )}
         
      </div>
    </nav>

     
  )
  
};


export default NavBar;