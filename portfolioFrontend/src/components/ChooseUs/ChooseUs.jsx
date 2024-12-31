import React from 'react';

import apostrophe1 from '../../assets/apostrophe-u.png';
import apostrophe2 from '../../assets/apostrophe-d.png';
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <>
          <div className="main-choose-wrapper">
                <span className='choose-top'></span>
                <div className="choose-wrapper">
                    <div className='aspostrophe-wrapper-u'>
                     <img src={apostrophe1} className='aspostrophe-u' alt="" />
                    </div>
                    <div className="choose-header">
                        <h2>Why <span>Choose</span> Us?</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ducimus et optio sit iusto voluptates?</p>
                    </div>

                    <div class="choose-content-wrapper">
                        <div class="reason">
                            <div className="content">
                                <div>
                                    <i class="fa-solid fa-gears"></i>   
                                </div>
                                <div>
                                <h3>Reliable Service</h3>
                                <p>We offer consistent and reliable services that ensure you get the best experience every time.</p>  
                                </div>
                            </div>
                        </div>
                        <div class="reason">
                            <div className="content">
                                <div>
                                <i class="fa-solid fa-hand-holding-dollar"></i>  
                                </div>
                                <div>
                                <h3>Affordable Pricing</h3>
                                <p>Our prices are competitive, ensuring you get value for money without compromising on quality.</p>  
                                </div>
                            </div>
                        </div>
                        <div class="reason">
                            <div className="content">
                                <div>
                                <i class="fa-solid fa-user-shield"></i>
                                </div>
                                <div>
                                <h3>Customer Support</h3>
                                <p>Our dedicated support team is available 24/7 to assist you with any queries or concerns.</p>  
                                </div>
                            </div>
                        </div>
                        <div class="reason">
                            <div className="content">
                                <div>
                                <i class="fa-solid fa-clock"></i>
                                </div>
                                <div>
                                <h3>Swift Delivery</h3>
                                <p>Our dedicated support team is available 24/7 to assist you with any queries or concerns.</p>  
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="aspostrophe-wrapper-l">

                    <img src={apostrophe2} className='aspostrophe-d' alt="" />
                    </div>
                </div>
                <span className='choose-bottom'></span>
            </div>  
        </>
    );
}

export default ChooseUs;
