const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' }); 
//THIS LINE DICTATES WHAT DB YOU USE!
// FOR TESTING -> path: './config/testconfig.env'  // FOR DEV DB -> path: './config/config.env'
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
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = server;