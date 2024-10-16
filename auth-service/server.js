const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes')
const cors = require('cors');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// MongoDB connection
connectDB();

// Middleware
app.use(express.json()); // Parse JSON body

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Start server
app.listen(port, () => {
    console.log(`AuthService running on port ${port}`);
});