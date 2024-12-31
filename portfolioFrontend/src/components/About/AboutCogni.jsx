import React from 'react';
import { Link } from 'react-router-dom';


import './AboutCogni.css';

import About1 from '../../assets/about1.png';

const AboutCogni = () => {
    return (
        <>
            <div className="about-main-wrapper">
                <div className="about-wrapper">
                    
                    <div className="about-content-wrapper">
                        <div className="about-content">
                            <div className="about-item">
                                <span className='about-line'></span>
                                <p>About Congnitech</p>
                            </div>
                            <h2 style={{color :'#1e143b',
                                fontWeight:'600'                          }}>
                                Journey leading Software Development Partner
                            </h2>
                            <div className='about-cognitech' >

                                <div className='about-exp'>
                                    <span><i class="fa-solid fa-arrow-up-long"></i></span>
                                    <h1>6</h1>
                                    <p>Years Experience</p>
                                </div>

                                    <p style={{textAlign:'justify', color :'#1e143b', fontWeight:'500'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien id arcu porttitor fermentum. Sed vel sapien id arcu porttitor fermentum. Sed vel sapien id arcu porttitor fermentum.

                                    </p>
                                
                            </div>
                                    <button>
                                        <span className="top"></span>
                                        <Link to="" className="primary-button">Learn More About</Link>
                                        <span className='bottom'></span>
                                    </button>
                        </div>

                        {/* <div className="about-img"> */}
                            <img src={About1} alt="" className="about-img"/>
                        {/* </div> */}

                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutCogni;
