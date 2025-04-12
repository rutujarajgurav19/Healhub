import React from 'react';
import './Footer.css'; // Import CSS for styling the footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2025 HealHub. All rights reserved.</p>
                <div className="contact-info">
                    <p>
                        <strong>Phone:</strong>{' '}
                        <a href="tel:+1234567890" className="contact-link">+1 (234) 567-890</a>
                    </p>
                    <p>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:support@healhub.com" className="contact-link">support@healhub.com</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;