// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const sequelize = require('./config');
const userRoutes = require('./routes/userRoutes');
const forgotRoutes = require('./routes/forgotRoutes');
const countryRoutes = require('./routes/countryRoutes');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes')

const bodyParser = require('body-parser');
// Middleware and configurations can go here
app.use(cors(' '));
app.use(express.json()); // Parse JSON request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('uploads/'));
// Include routes
app.use('/api/users', userRoutes); // Example base URL for user-related routes
app.use('/api/forgots', forgotRoutes);
app.use('/api/country',countryRoutes);
app.use('/api/new',roomRoutes);
app.use('/api/new',bookingRoutes)

sequelize.sync({ force: false }) // Synchronize Sequelize with the database
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
    
  });
