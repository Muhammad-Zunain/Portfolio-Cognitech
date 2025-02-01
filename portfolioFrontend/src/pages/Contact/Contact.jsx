import React from 'react';
import { Link } from "react-router-dom";

import './Contact.css'

const Contact = () => {
    return (
        <>
            <div className='f-contact-header'>
                <h2>Contact Us</h2>
                <p>
                We’d love to hear from you! Have questions or a project in mind? Contact us today to bring your ideas to life.</p>
            </div>
            <div className="container main_contact_wrapper">
                <div className='contact_style_left'></div> 
                <div className='contact_style_right'></div> 
                <div className="contact__cognitech" >
                    <h3>Do you have any question?</h3>
                    <div className="contact__info">
                        <input className="user_name" type="text" placeholder="Your Name" id="name" />
                        <input className="user_email" type="email" placeholder="Your Email" id="email" />
                        <input className="ph_no" type="tel" placeholder="Your Phone" id="phonenumber" maxLength="11" />
                    </div>
                    <textarea className="message" name="message" id="message" placeholder="Your Message"></textarea>

                    <button className="primary-button">
                        <span className="top"></span>
                        <Link to="/Contact" className="primary-button-text">Send Message</Link>
                        <span className="bottom"></span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Contact;
