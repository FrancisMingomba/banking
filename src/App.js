import React, { Component } from "react";
import NavBar from "./components/navBar";
import MiniNavBar from "./components/miniNavBar";
import Home from "./components/home";





class App extends Component {
  render() {
    return (   
      <React.Fragment>
        <div class="body">
        <div> <MiniNavBar />
        </div><NavBar />
        <div><Home />
        </div> 
          
          
          </div>     
        
      </React.Fragment>
      

      
    );
    

      
  }
}

export default App;