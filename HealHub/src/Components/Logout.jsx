import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    console.log("Logout component rendered");

    const handleLogout = () => {
        console.log("Attempting to log out...");
        fetch('http://localhost/HealHub/logout.php')
            .then(response => {
                console.log("Response received:", response);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Data received:", data);
                if (data.success) {
                    // Redirect to home
                    navigate('/Home'); // Ensure this path is correct
                } else {
                    alert(data.message);
                }
            })
            .catch(error => {
                console.error('Error logging out:', error);
            });
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

export default Logout;
