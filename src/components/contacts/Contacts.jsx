import React from "react";
import './contacts.css'

const Contacts = () => {
    return (
        <div className="contacts">
            <h2 className="contacts-title">Свяжитесь с нами</h2>
            <div className="contacts-info">
                <div className="contact-item">
                    <h3>Наш офис</h3>
                    <p>12345, Город, Улица, Дом 67</p>
                </div>
                <div className="contact-item">
                    <h3>Телефон</h3>
                    <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
                </div>
                <div className="contact-item">
                    <h3>Email</h3>
                    <p><a href="mailto:info@snickershub.com">info@snickershub.com</a></p>
                </div>
            </div>
            <div className="contacts-map">
                <iframe 
                    title="Our Location"
                    src="https://www.google.com/maps/embed?pb=..."
                    width="100%" 
                    height="400" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}

export default Contacts;