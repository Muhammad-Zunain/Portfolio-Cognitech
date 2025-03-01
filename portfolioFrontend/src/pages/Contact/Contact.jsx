import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser'; // Import EmailJS
import './Contact.css';

const Contact = () => {
    const form = useRef(); // Ref for form submission
    const [isSent, setIsSent] = useState(false); // State for success message

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_n6idzql', 
            'template_oh0e9hc', 
            form.current,
            'oYjwPyaSfojAx10mr' 
        )
        .then((result) => {
            console.log('Success:', result.text);
            setIsSent(true); 
            form.current.reset(); 
        })
        .catch((error) => {
            console.log('Error:', error.text);
        });
    };

    return (
        <>
            <div className='f-contact-header'>
                <h2>Contact Us</h2>
                <p>
                    We’d love to hear from you! Have questions or a project in mind? Contact us today to bring your ideas to life.
                </p>
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
                            <span className="primary-button-text">Send Message</span>
                            <span className="bottom"></span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
