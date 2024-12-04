import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/login', { email, password });
            if (response.status === 200) {
                navigate('/success');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Welcome Back!</h2>
                <form style={styles.form} onSubmit={handleLogin}>
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
                        Login
                    </button>
                    {error && <p style={styles.error}>{error}</p>}
                </form>
                <p style={styles.footerText}>
                    Don't have an account?{' '}
                    <a href="/register" style={styles.link}>
                        Register here
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
    buttonHover: {
        backgroundColor: '#357ABD',
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

export default Login;
