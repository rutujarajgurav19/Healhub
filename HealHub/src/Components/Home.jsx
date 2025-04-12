import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import './Home.css';


function Home() {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Welcome to HealHub</h1>
                <p>Your health, our priority.</p>
            </header>

            {/* Image Carousel */}
            <div className='carousel'>
            <div>
            <Carousel className="home-carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/src/assets/carousel1.jpg" // Replace with your image path
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/src/assets/carousel2.jpg" // Replace with your image path
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/src/assets/carousel3.jpg" // Replace with your image path
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            </div>

            {/* Content Section */}
            <div className="home-content">
                <h2>Why Choose HealHub?</h2>
                <p>
                    At HealHub, we are committed to providing exceptional healthcare services. 
                    Our team of experienced professionals is dedicated to ensuring your well-being 
                    through personalized care and innovative solutions.
                </p>
                <p>
                    Whether you're seeking mental health support, physical therapy, or general healthcare, 
                    HealHub is your trusted partner in health.
                </p>

                <div className="appointment-section">
                <Link className="appointment-button" to="/signup">Book an Appointment</Link>


            </div>
            </div>
            </div>
            {/* Appointment Button */}
          
          

        </div>
    );
}

export default Home;
