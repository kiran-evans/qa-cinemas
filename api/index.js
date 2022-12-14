const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// ----------------------
//THIS LINE DICTATES WHAT DB YOU USE!
// FOR TESTING -> path: './config/testconfig.env'  // FOR DEV DB -> path: './config/config.env'
const configPath = './config/testconfig.env';
dotenv.config({ path: configPath }); 
// ----------------------

const port = process.env.PORT;
const movieRoutes = require('./routes/movieRoutes');
const formRoutes = require('./routes/contactFormRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const discussionRoutes = require('./controller/discussionController');
const connectDB = require('./config/db');

connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/api/movies', movieRoutes);
app.use('/api/contact', formRoutes);
app.use('/api/discussions', discussionRoutes);
app.use('/api/booking', bookingRoutes);
const server = app.listen(port, () => console.info(`Server started on port ${port}`));

(configPath === './config/config.env') && console.warn("-- WARNING: Running development environment. NOT SAFE FOR TESTING. --");

module.exports = server;