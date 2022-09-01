const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const port = process.env.PORT;
const movieRoutes = require('./routes/movieRoutes');
const formRoutes = require('./routes/contactFormRoutes');
const connectDB = require('./config/db');

connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/api/movies', movieRoutes);
app.use('/api/contact', formRoutes);
app.listen(port, () => console.log(`Server started on port ${port}`));
