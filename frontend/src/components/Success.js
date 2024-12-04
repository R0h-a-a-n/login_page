import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Redirect to login page
        navigate('/');
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.heading}>Welcome Back!</h1>
                <p style={styles.message}>You have successfully logged in.</p>
                <img 
                    src="https://via.placeholder.com/150" 
                    alt="Success" 
                    style={styles.image} 
                />
                <button style={styles.button} onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f9fafb',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%',
    },
    heading: {
        color: '#4a90e2',
        fontSize: '2rem',
        marginBottom: '20px',
    },
    message: {
        fontSize: '1.2rem',
        color: '#333',
        marginBottom: '20px',
    },
    image: {
        width: '100px',
        height: '100px',
        marginBottom: '20px',
        borderRadius: '50%',
    },
    button: {
        backgroundColor: '#4a90e2',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        fontSize: '1rem',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#357ABD',
    },
};

export default Success;
