import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; 
import contactBanner from "../../assets/contact-banner.jpg";
import './Contact.css';

const Contact = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    const form = useRef(); 
    const [isSent, setIsSent] = useState(false); 

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_n6idzql', 
            'template_oh0e9hc', 
            form.current,
            'oYjwPyaSfojAx10mr' 
        )
        .then((result) => {
            setIsSent(true); 
            form.current.reset(); 
        })
    };

    return (
        <>
            <div className="f-header">
                    <img src={contactBanner} alt="" />
                    <div className="f-wrapper" data-aos="fade-up" data-aos-duration="1000">
                      <h2>Conatct Us</h2>
                      <p> We’d love to hear from you! Have questions or a project in mind? Contact us today to bring your ideas to life.</p>
                    </div>
                  </div>

            <div className="container main_contact_wrapper">
                <div className='contact_style_left'></div> 
                <div className='contact_style_right'></div> 

                <div className="contact__cognitech">
                    <h3>Do you have any questions?</h3>

                    {isSent && <p className="success-message">Your message has been sent successfully!</p>}

                    <form ref={form} onSubmit={sendEmail}>
                        <div className="contact__info">
                            <input type="text" name="user_name" placeholder="Your Name" required />
                            <input type="email" name="user_email" placeholder="Your Email" required />
                            <input type="tel" name="user_phone" placeholder="Your Phone" maxLength="11" />
                        </div>
                        <textarea name="message" placeholder="Your Message" required></textarea>

                        <button type="submit" className="primary-button">
                            <span className="top"></span>
                            <span className="primary-button-text" style={{color: '#fff'}}>Send Message</span>
                            <span className="bottom"></span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
