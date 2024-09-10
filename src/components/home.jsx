import React, { Component } from 'react';
import "../css/home.css";
import {  NavLink } from "react-router-dom";
import COFFEE from "../images/coffee.jpg";
import { PiWalletDuotone } from "react-icons/pi";
import { PiChatCircleDotsDuotone } from "react-icons/pi";
import { PiHouseLineDuotone } from "react-icons/pi";
import { PiCarDuotone } from "react-icons/pi";
import { PiIdentificationCardDuotone } from "react-icons/pi";
import { GiNetworkBars } from "react-icons/gi";


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
                        <div className="container2_boxes">
                       <NavLink className="nav-item nav-link" to="/register">
                            <p class="wallet">< PiWalletDuotone  className="wallet" /></p>
                            <p class="wallet">Checkin Acconut</p>
                       </NavLink> 
                       </div>
                       <div className="container2_boxes">
                       <NavLink className="nav-item nav-link" to="/register">
                            < PiCarDuotone  className="wallet" />
                            <p class="wallet">Auto Loans</p>
                        </NavLink> 
                        </div>
                        <div className="container2_boxes">
                        <NavLink className="nav-item nav-link" to="/register">
                            <p class="wallet">< PiHouseLineDuotone  className="wallet" /></p>
                            <p class="wallet">Mortgage Loan</p>
                        </NavLink> 
                        </div>
                        <div className="container2_boxes">
                        <NavLink className="nav-item nav-link" to="/register">
                            < GiNetworkBars  className="wallet" />
                            <p class="wallet">Morney Markets</p>
                        </NavLink>   
                        </div>
                        <div className="container2_boxes">              
                        <NavLink className="nav-item nav-link" to="/register">
                           <  PiIdentificationCardDuotone  className="wallet" />
                            <p class="wallet">Financial Education</p> 
                       </NavLink> 
                       </div> 
                       <div className="container2_boxes">
                       <NavLink className="nav-item nav-link" to="/register">
                            <  PiChatCircleDotsDuotone className="wallet" />
                             <p class="wallet">Feedback</p>                           
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
                                          
                    <img className="coffee-image" src={COFFEE} alt="" />                
                    <p className="container5-p1">Did you know GreenState offers Card Controls for your debit & credit card?</p>
                    
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
                          <div className="p-container5-learn-more ">learn more</div>                       
                                
                </div>  
                

                <div className="container7">
                   
                    <div className="box">
                    <div className="social_media_icons">
                    <div className="container2_boxes">
                       <NavLink className="nav-item nav-link" to="/register">
                            <  PiChatCircleDotsDuotone className="wallet" />                        
                        </NavLink> 
                        </div>
                               
                                        
                    </div> 
                    <ul  className="footer_list1">                      
                            <li className="footer_item"><a href="/#">Privacy Policy</a></li>
                            <li className="footer_item"><a href="/#">Terms & Condition</a></li>
                            <li className="footer_item"><a href="/#">Helps & Support</a></li>
                            <li className="footer_item"><a href="/#">Contact us</a></li>                       
                    </ul>
                    <li className="My_Best_Credit_Union">My Best Credit Union</li>
                    <li className="po_box">PO Box 9999</li>
                    <li className="address">Address, IA 99999-9999</li>
                    <li className="phone">999-999-999 or 999-999-9999</li>
                    <li className="routing_number">Routing number #9999999</li>
                    <li className="footer_paragraphe2">if you are using a screen reader or other assistive divice</li>
                    <li className="footer_paragraphe2">ortechnology and are having problem using this</li>
                    <li className="footer_paragraphe2">call 999-999-9999</li>
                    </div>
                    <div className="footer_items">                   
                            <div className="item1">
                                <div className="img1">
                                    <p>Image here1</p>
                                </div>
                            </div>
                            <div className="item2">
                                <div className="img2">
                                   <p>Image here2</p>  
                                   </div>                             
                            </div>
                            <div className="item3">
                                <div className="img3">
                                      <p>Image here3</p>
                                </div>
                            </div>
                                 <div className="item4">                                  
                                    <li className="p1_item4">Federally insure by</li>
                                    <li className="p2_item4">Equal Housing Opportuniy</li>
                                    <li className="p3_item4">&copy; 2024 My Best Credit union</li>                                  
                                 </div>   
                           
                            </div>                              
                </div>                      
              </div>                    
        );
    }
}
 
export default Home ;