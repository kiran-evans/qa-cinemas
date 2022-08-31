const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;
const movieRoute = require('./routes/movieRoutes');
const connectDB = require('./config/db');
dotenv.config({ path: './config/config' });

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/movieRoute', movieRoute);
app.listen(port, () => console.log(`Server started on port ${port}`));
