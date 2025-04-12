import React from 'react';
import './Therapy.css';

const Therapy = () => {
    return (
        <div className="therapy-container">
            {/* Header Section */}
            <div className="therapy-header">
                <h1 className="therapy-title">Therapy Services</h1>
            </div>

            {/* Introduction Section */}
            <p className="therapy-description">
                Welcome to our therapy services. We are here to help you on your journey to better health and well-being.
                Our professional therapists are dedicated to providing personalized care tailored to your needs.
            </p>

            {/* Services Section */}
            <div className="therapy-services">
                <h2>Our Therapy Services</h2>
                <div className="therapy-service-list">
                    <div className="therapy-service-item">
                        <img
                            src="./src/assets/Individual.jpg" // Replace with your image URL
                            alt="Individual Therapy"
                            className="therapy-service-image"
                        />
                        <h3>Individual Therapy</h3>
                        <p>
                            One-on-one sessions with a licensed therapist to address personal challenges and achieve mental clarity.
                        </p>
                    </div>
                    <div className="therapy-service-item">
                        <img
                            src="./src/assets/Group.jpg" // Replace with your image URL
                            alt="Group Therapy"
                            className="therapy-service-image"
                        />
                        <h3>Group Therapy</h3>
                        <p>
                            Join a supportive group environment to share experiences and learn from others facing similar challenges.
                        </p>
                    </div>
                    <div className="therapy-service-item">
                        <img
                            src="./src/assets/family-therapy.jpeg" // Replace with your image URL
                            alt="Family Therapy"
                            className="therapy-service-image"
                        />
                        <h3>Family Therapy</h3>
                        <p>
                            Strengthen family bonds and improve communication with the help of a professional therapist.
                        </p>
                    </div>
                    <div className="therapy-service-item">
                        <img
                            src="./src/assets/Online-Counseling.jpg" // Replace with your image URL
                            alt="Online Counseling"
                            className="therapy-service-image"
                        />
                        <h3>Online Counseling</h3>
                        <p>
                            Convenient and confidential therapy sessions from the comfort of your home.
                        </p>
                    </div>
                    <div className="therapy-service-item">
                        <img
                            src="./src/assets/Stress-Management.jpg" // Replace with your image URL
                            alt="Stress Management"
                            className="therapy-service-image"
                        />
                        <h3>Stress Management</h3>
                        <p>
                            Learn effective techniques to manage stress and improve your overall well-being.
                        </p>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="therapy-benefits">
                <h2>Why Choose Our Therapy Services?</h2>
                <p>
                    Our therapy services are designed to help you:
                </p>
                <ul>
                    <li>Improve mental health and emotional well-being</li>
                    <li>Develop coping strategies for stress and anxiety</li>
                    <li>Enhance communication and relationships</li>
                    <li>Achieve personal growth and self-awareness</li>
                </ul>
            </div>

            {/* Call-to-Action Section */}
            <div className="therapy-cta">
                <p>Ready to take the first step toward a healthier, happier you?</p>
                <button className="therapy-button" onClick={() => alert('Contact us for more details!')}>
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default Therapy;