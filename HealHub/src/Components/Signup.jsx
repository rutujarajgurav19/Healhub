import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phonenumber: '',
        email: '',
        password: '',
    });

    const [message, setMessage] = useState(''); // State to store success/error messages

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

const handleSubmit = async (e) => {
    console.log("Form submitted with data:", formData); // Debug log

        e.preventDefault();
        try {
            const response = await fetch("http://localhost/HealHub/Signup.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setMessage(data.message);

            if (data.success) {
                setFormData({
                    name: '',
                    address: '',
                    phonenumber: '',
                    email: '',
                    password: '',
                });
            }
        } catch (error) {
            setMessage("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                {message && <p className="message">{message}</p>}
                
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <br />

                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
                <br />

                <label>Phone Number:</label>
                <input
                    type="text"
                    name="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    required
                />
                <br />

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <br />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <br />

                <button type="submit">Sign Up</button>
            </form>

            <p>
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    );
}

export default Signup;