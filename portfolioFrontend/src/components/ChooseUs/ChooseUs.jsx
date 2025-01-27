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
                        <p>We deliver innovation, reliability, and tailored solutions for your business needs.</p>
                    </div>

                    <div class="choose-content-wrapper">
                        <div class="reason">
                            <div className="content">
                                <div>
                                    <i class="fa-solid fa-gears"></i>   
                                </div>
                                <div>
                                <h3>Reliable Service</h3>
                                <p>We offer reliable services for a seamless, efficient, and exceptional experience.</p>  
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
                                <p>We combine quality with affordability, delivering solutions that maximize your return on investment.</p>  
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
                                <p>Our 24/7 support team is always ready to assist with your queries and concerns.</p>  
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
                                <p>We prioritize efficiency and quality, delivering projects on time to drive your business forward.</p>  
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
