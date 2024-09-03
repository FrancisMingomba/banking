import React, { Component } from 'react';
import "../css/home.css";
import {  NavLink } from "react-router-dom";
import COFFEE from "../images/coffee.jpg"

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
                <div className='x'></div>
                <div className="container4">
                    <div className="other">
                        <h1 className="p-other">Image here...</h1>
                    </div>
                </div>    

              <div className="news-annocements">
                <div className="news-annocement ">News & Annocements</div>  
              </div>

               

                <div className="container5">
                    <div className="image-description">                  
                    <img className="coffee-image" src={COFFEE} alt="" />                
                    <p className="container5-p1">Did you know GreenState offers Card Controls for your debit & credit card?</p>
                    <p className="container5-p2">Use this service in onlone Banking to:</p>
                    <ul className>
                        <li>
                           <p className="container5-p3">Set alert to maange spending, transaction, and more</p> 
                        </li>
                        <li>
                           <p className="container5-p3">Enable or disable your card</p> 
                        </li>
                        <li>
                          <p className="container5-p3"> Set travel notification</p> 
                        </li>                  
                    </ul>    
                    <div className="container5-learn-more">
                        <p className="">Learn more</p>
                    </div>              
                    </div>
                    
                </div>               
     </div>                    
        );
    }
}
 
export default Home ;