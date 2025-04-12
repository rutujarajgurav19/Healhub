import React, { useState } from "react";
import "./Book.css";
import { useNavigate } from "react-router-dom";

function Book() {
    const navigate = useNavigate(); // For navigation
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        reason: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const response = await fetch("http://localhost/HealHub/book.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setSuccess("Appointment booked successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    date: "",
                    time: "",
                    reason: "",
                });
                setTimeout(() => navigate("/"), 2000); // Redirect after success
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError("Failed to connect to the server.");
        }
    };

    return (
        <div className="appointment-container">
            <h2>Book an Appointment</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Phone:</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

                <label>Date:</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />

                <label>Time:</label>
                <input type="time" name="time" value={formData.time} onChange={handleChange} required />

                <label>Reason:</label>
                <textarea name="reason" value={formData.reason} onChange={handleChange} required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Book;
