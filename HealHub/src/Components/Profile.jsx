import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile({ user, onLogout }) {
    const navigate = useNavigate();

    const handleEditProfile = () => {
        navigate('http://localhost/HealHub/edit-profile');
    };

    const handleForgotPassword = () => {
        navigate('http://localhost/HealHub/forgot-password');
    };

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <img src={user.profilePicture} alt="Profile" className="profile-pic" />
            <div className="profile-actions">
                <button onClick={handleEditProfile}>Edit Profile</button>
                <button onClick={handleForgotPassword}>Forgot Password</button>
                <button onClick={onLogout}>Logout</button>
            </div>
        </div>
    );
}

export default Profile;
