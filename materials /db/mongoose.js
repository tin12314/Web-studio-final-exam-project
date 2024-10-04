// To enable the .env
require('dotenv').config();

const mongoose = require('mongoose');

// Replace the placeholders with your MongoDB Atlas connection string details
// Change <sid> to your real student id, e.g., 2024b_final_v1234567 
const mongoUrl = "mongodb+srv://s3970879:Tkr9GRM44uNyJ8eA@cluster0.jnhpi.mongodb.net/2024b_final_s3970879_tutorial?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB Atlas
mongoose
  .connect(mongoUrl)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) =>
    console.error('Error connecting to MongoDB Atlas', err)
  );

module.exports = { mongoose };
