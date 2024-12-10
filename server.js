const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/recipes', recipeRoutes);

// Route default
app.get('/', (req, res) => {
  res.send('Recipe API is running...');
});

module.exports = app;
