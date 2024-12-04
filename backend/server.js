const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));


// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && user.password === password) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Register route
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    console.log('Incoming request:', req.body); // Log incoming data

    if (!email || !password) {
        console.log('Validation error: Missing email or password'); // Debugging line
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('Conflict error: Email already exists'); // Debugging line
            return res.status(409).json({ message: 'Email already exists.' });
        }

        const newUser = new User({ email, password });
        console.log('Attempting to save user:', newUser); // Debugging line
        await newUser.save();
        console.log('User saved successfully:', newUser); // Debugging line
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Server error:', error); // Log the exact error
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});




// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
