import React from 'react';
import './Counselling.css'; // Ensure this file exists and is updated
import './Footer'

const Counselling = () => {
    return (
        <div className="counselling-container">
            {/* Header Image */}
            <div className="counselling-header">
                <img
                    src="./src/assets/counselling.jpg" // Replace with your image URL
                    alt="Counselling Services"
                    className="counselling-image"
                />
            </div>

            {/* Welcome Section */}
            <p className="counselling-welcome">
                Welcome to HealHub's Counselling Services. We are here to support your mental health and well-being.
            </p>

            {/* Services Section */}
            <div className="counselling-section">
                <h2>Our Services</h2>
                <ul>
                    <li>Individual Counselling</li>
                    <li>Group Therapy</li>
                    <li>Stress Management</li>
                    <li>Relationship Counselling</li>
                    <li>Career Guidance</li>
                </ul>
            </div>

            {/* Contact Section */}
            <div className="counselling-section">
                <h2>Contact Us</h2>
                <p>
                    If you have any questions or would like to book a session, please contact us at:
                </p>
                <p>
                    <strong>Email:</strong> support@healhub.com
                </p>
                <p>
                    <strong>Phone:</strong> +1 (123) 456-7890
                </p>
            </div>
        </div>
    );
};

export default Counselling;