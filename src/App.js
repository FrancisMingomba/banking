import React, { Component } from "react";
//import {  Routes } from "react-router-dom";
//import "./css/App.css";
//import LoginForm from './components/loginForm';
import NavBar from "./components/navBar";
import MiniNavBar from "./components/miniNavBar";
//import RegisterForm from "./components/registerForm";



class App extends Component {
  render() {
    return (   
      <React.Fragment>      
         <div> <MiniNavBar />
        </div>
        <NavBar />
        <main className="container">
        </main> 
        <div class="alert"></div>
      </React.Fragment>
      

      
    );
    

      
  }
}

export default App;