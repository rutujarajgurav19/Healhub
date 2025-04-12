import React from 'react';
import './Support.css';

const Support = () => {
    return (
        <div className="support-container">
            {/* Header Section */}
            <h1 className="support-header">Support</h1>
            <p className="support-description">
                If you need assistance, our support team is here to help. Explore the FAQs below or contact us directly.
            </p>

            {/* FAQ Section */}
            <div className="support-faq">
                <h2>Frequently Asked Questions</h2>
                <ul>
                    <li><strong>How can I book an appointment?</strong> You can book an appointment through our online portal or by contacting us directly.</li>
                    <li><strong>What services do you offer?</strong> We offer therapy, counseling, and support group services tailored to your needs.</li>
                    <li><strong>How can I reach customer support?</strong> You can reach us via email or phone. Details are provided below.</li>
                </ul>
            </div>

            {/* Contact Section */}
            <div className="support-contact">
                <h2>Contact Us</h2>
                <p><strong>Email:</strong> support@healhub.com</p>
                <p><strong>Phone:</strong> +1 (234) 567-890</p>
                <p><strong>Address:</strong> Tathawade , Near D.Y.Patil college

Pune-411033 </p>
            </div>

            {/* Call-to-Action Section */}
            <div className="support-cta">
                <p>Need further assistance? Reach out to us, and we’ll get back to you as soon as possible.</p>
                <button className="support-button" onClick={() => alert('Thank you for reaching out!')}>
                    Contact Support
                </button>
            </div>
        </div>
    );
};

export default Support;
