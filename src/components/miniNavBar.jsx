import React from "react";
import {  NavLink } from "react-router-dom";
import "../css/miniNavBar.css";



const NavBar = ({ user }) => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/home">
           <p className="join">join</p> 
          </NavLink>
          { !user && (
          <React.Fragment>        
            <NavLink className="nav-item nav-link" to="/login">
          <p class="applyforloan">apply for loan</p> 
          </NavLink>
          <NavLink className="nav-item nav-link" to="/register">
          <p class="loanpayment">loan payment</p> 
          </NavLink> 
          <NavLink className="nav-item nav-link" to="/register">
          <p class="branches">Branches & ATM </p> 
          </NavLink> 
          <NavLink className="nav-item nav-link" to="/register">
          <p class="foremployers">For Employers</p> 
          </NavLink> 
          <NavLink className="nav-item nav-link" to="/register">
          <p class="rates"> Rates</p> 
          </NavLink> 
          </React.Fragment>
          
          )}
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;