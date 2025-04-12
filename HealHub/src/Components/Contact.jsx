import React, { useState } from "react"; // Import useState for managing form data
import './Contact.css';
import { FaCalendarAlt, FaPhoneAlt, FaBuilding, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation

const Contact = () => {
  const [formData, setFormData] = useState({ // Define state for form data
    name: "",
    phone: "",
    email: "",
    questions: [],
    reachTime: [],
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const dataToSend = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      questions: formData.questions,
      reachTime: formData.reachTime,
      message: formData.message,
    };

    try {
      const response = await fetch("http://localhost/HealHub/Contact.php", {
        method: "POST",  // Ensure this is POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      if (data.status === "success") {
        setSuccessMessage("Contact submitted successfully!");
        setErrorMessage("");  // Clear any previous errors
      } else {
        setErrorMessage(data.message || "Failed to submit. Please try again.");
      }

    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="contact-header">Contact Us</div>

      {/* Contact Info Section */}
      <div className="contact-container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-gray-700">
          <div className="contact-info">
            <FaCalendarAlt className="text-blue-600 text-5xl mb-3" />
            <h3>REQUEST APPT NOW</h3>
            <p className="text-blue-500 mt-2">
              <a href="/book" className="underline hover:text-blue-700">
                Schedule an introductory call or phone intake through our online portal
              </a>
            </p>
          </div>
          <div className="contact-info">
            <FaPhoneAlt className="text-blue-600 text-5xl mb-3" />
            <h3>PHONE & FAX</h3>
            <p className="text-gray-600">Tel: 856945231</p>
            <p className="text-gray-600">Fax: (424) 371-5190</p>
          </div>
          <div className="contact-info">
            <FaBuilding className="text-blue-600 text-5xl mb-3" />
            <h3>ADDRESS</h3>
            <p className="text-gray-600">Tathawade, Near D.Y.Patil College</p>
            <p className="text-gray-600">Pune-411033</p>
          </div>
          <div className="contact-info">
            <FaClock className="text-blue-600 text-5xl mb-3" />
            <h3>HOURS (BY APPT ONLY)</h3>
            <p className="text-gray-600">Monday – Thursday: 8am – 9pm</p>
            <p className="text-gray-600">Friday: 8am – 5pm</p>
          </div>
        </div>
      </div>

      {/* Email Section */}
      <div className="contact-container mx-auto px-6 py-12 bg-gray-50 shadow-lg rounded-lg mt-6">
        <h2 className="text-3xl font-semibold text-blue-700">Email Us</h2>
        <p className="text-gray-600 mt-2">
          For the quickest response, please{" "}
          <a href="#" className="text-blue-500 underline hover:text-blue-700">
            click here to schedule an introductory call or intake
          </a>
          , otherwise send us a message below.
        </p>

        {/* Display Messages */}
        {successMessage && (
          <div className="success-message text-green-600">
            {successMessage}
            {setTimeout(() => {
              window.location.href = "/home";
            }, 2000)}
          </div>
        )}
        {errorMessage && <div className="error-message text-red-600">{errorMessage}</div>}

        {/* Contact Form */}
        <form className="contact-form mt-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Name*</label>
              <input
                type="text"
                className="w-full mt-2"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block font-semibold">Phone Number*</label>
              <input
                type="tel"
                className="w-full mt-2"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              className="w-full mt-2"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="mt-4">
            <label className="block font-semibold">I have questions about:*</label>
            <div className="flex flex-wrap gap-4 mt-2">
              {["Therapy", "Training Programs", "Other"].map((item) => (
                <label key={item} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="form-checkbox text-blue-500" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="block font-semibold">Best time(s) to reach me:</label>
            <div className="flex flex-wrap gap-4 mt-2">
              {["Morning (9am-noon)", "Afternoon (noon-5pm)", "Evening (5pm-8pm)"].map((time) => (
                <label key={time} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="form-checkbox text-blue-500" />
                  <span>{time}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="block font-semibold">Brief Message</label>
            <textarea
              className="w-full mt-2"
              rows="4"
              placeholder="Enter your message (max 200 characters)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <div className="mt-6">
            <button className="w-full" to="/home">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
