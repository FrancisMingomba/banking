import React, { Component } from 'react';
import "../css/home.css";
import {  NavLink } from "react-router-dom";

class Home extends Component {
   
    render() { 
        return (    
            <div class="body">
                <div class="container1">
                        <div className="under-nav">Your message here</div>                       
                            <div className="body1">   
                                <p className="p1">Have an auto loan elsewhere?</p>
                                <p className="text1">When you refinance your loan to GreenState you can:</p>
                                <p className="text">   o Get a <s>$100</s> $200 cash bonus when you refinance by August 24, 2024</p>
                                <p className="text">   o Make no payment for up to 60 days </p>
                                <p className="text">   o Reduce your monthly payment (or keep it the same for a faster payoff)</p>
                                <div className="get-started1">
                                    <p className="p-get-started">Get started</p>
                                </div>
                                <div className="image1"></div>                                          
                            </div>                                
                </div>  
                <div className="container2">
                        <div className="container-box">  
                            <NavLink className="container-box" to="">
                            <p className="">1</p> 
                            </NavLink> 
                        </div>
                        <div className="container-box">  
                            <NavLink className="container-box" to="">
                            <p className="">2</p> 
                            </NavLink> 
                        </div>
                        <div className="container-box">  
                            <NavLink className="container-box" to="">
                            <p className="">3</p> 
                            </NavLink> 
                        </div>                   
                        <div className="container-box">  
                            <NavLink className="container-box" to="">
                            <p className="">4</p> 
                            </NavLink> 
                        </div>
                        <div className="container-box">  
                            <NavLink className="container-box" to="">
                            <p className="">5</p> 
                            </NavLink> 
                        </div>
                        <div className="container-box">  
                            <NavLink className="container-box" to="">
                            <p autoFocus className="">6</p> 
                            </NavLink> 
                        </div>                   
                </div>   
                <div className="container3">
                    <div className="body2">
                            <p className="p1">Have an auto loan elsewhere?</p>
                            <p className="text1">When you refinance your loan to GreenState you can:</p>
                            <p className="text">   o Get a <s>$700</s> $200 cash bonus when you refinance by August 24, 2024</p>
                            <p className="text">   o Make no payment for up to 60 days </p>
                            <p className="text">   o Reduce your monthly payment (or keep it the same for a faster payoff)</p>
                            <div className="get-started2">
                                <p className="p-get-started">Get started</p>
                            </div>
                    </div>    
                    <div className="image2"></div>   
                </div>
                <div className="container4">
                    <div className="other">
                        
                    </div>
                </div>                                                     
     </div>                    
        );
    }
}
 
export default Home ;