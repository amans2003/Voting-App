const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const path = require('path');
const cors = require('cors');

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

app.use(express.static(path.join(__dirname, 'frontend')));
app.use(cors());

app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})