import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/register', { email, password });
            if (response.status === 201) {
                setMessage(response.data.message);
                setError('');
                setTimeout(() => {
                    navigate('/');
                }, 2000); // Redirect to login page after 2 seconds
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
            setMessage('');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Create an Account</h2>
                <form style={styles.form} onSubmit={handleRegister}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" style={styles.button}>
                        Register
                    </button>
                </form>
                {message && <p style={styles.success}>{message}</p>}
                {error && <p style={styles.error}>{error}</p>}
                <p style={styles.footerText}>
                    Already have an account?{' '}
                    <a href="/" style={styles.link}>
                        Login here
                    </a>
                </p>
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
        margin: 0,
    },
    card: {
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '100%',
        maxWidth: '400px',
    },
    heading: {
        marginBottom: '20px',
        fontSize: '2rem',
        color: '#4a90e2',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    formGroup: {
        textAlign: 'left',
    },
    label: {
        marginBottom: '5px',
        color: '#333',
        fontWeight: 'bold',
        fontSize: '1rem',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '1rem',
    },
    button: {
        padding: '10px',
        backgroundColor: '#4a90e2',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    success: {
        marginTop: '10px',
        color: 'green',
        fontSize: '0.9rem',
    },
    error: {
        marginTop: '10px',
        color: 'red',
        fontSize: '0.9rem',
    },
    footerText: {
        marginTop: '20px',
        fontSize: '0.9rem',
        color: '#666',
    },
    link: {
        color: '#4a90e2',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
};

export default Register;
