import React, { useState } from "react";
import { Link } from "react-router-dom";

function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="profilePicture" className="form-label">Profile Picture URL</label>
          <input
            type="text"
            className="form-control"
            id="profilePicture"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
        <Link to="/Home" className="btn btn-secondary ms-2">Cancel</Link>
      </form>
    </div>
  );
}

export default EditProfile;
