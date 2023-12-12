import express from 'express';
import bodyParser from 'body-parser';
import router from '../routes/index';
require('dotenv').config(); 
require('../db/connect')

const app = express();
const port =process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(router)


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
