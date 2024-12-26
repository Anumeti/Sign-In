const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory users database (demo purposes only)
const users = [];

// Sign-Up Route
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    if (users.some(user => user.email === email)) {
        return res.status(400).json({ message: 'Email already registered.' });
    }

    users.push({ name, email, password });
    res.status(201).json({ message: 'User registered successfully.' });
});

// Sign-In Route
app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password.' });
    }

    res.status(200).json({ message: 'Sign In successful.', user });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
