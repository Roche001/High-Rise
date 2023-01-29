const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// initialize the application
const app = express();

// configuration for environment variables
require('dotenv').config();


// use middleware
app.use(cors());

// ROUTES


// database connection
const PORT = process.env.PORT;

// connect to the database
connectDB();


// listen to the port
app.listen(PORT, () =>{
  console.log(`App listening on port ${PORT}`);
})
