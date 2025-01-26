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
                                <p>We provide consistent and dependable services, ensuring that your experience with us is seamless, efficient, and exceeds expectations every time.</p>  
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
                                <p>Our dedicated support team is available 24/7 to assist you with any queries or concerns, ensuring you always have the help you need.</p>  
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
                                <p>We prioritize efficiency without compromising quality, delivering your projects on time to keep your business moving forward.</p>  
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
