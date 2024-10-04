const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { notFound } = require('./src/middleware/errorHandlers.js');
const { errorMiddleware } = require('./src/middleware/error-middleware.js');
const cookieParser = require('cookie-parser');

// Import routes
const userRoutes = require('./src/useCase/user/index.js');
const authRoutes = require('./src/useCase/auth/index.js');
const poleRoutes = require('./src/useCase/pole/index.js');
const vendorRoutes = require('./src/useCase/vendor/index.js');


dotenv.config();

const PORT = process.env.PORT || 5002;
const app = express();
app.use(express.json());

//PARSE APPLICATION JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'))
app.use(morgan(':date[web]'))
app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome to WIKA API!');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use('/api/pole', poleRoutes);
app.use('/api/vendor', vendorRoutes);

// Middleware for handling "Not Found" errors (404)
app.use(notFound);
app.use(errorMiddleware);

// Middleware for handling other errors (errorStatus)
// app.use(errorStatus);

app.listen(PORT, () => {
    console.log('Server running port: ', PORT);
});