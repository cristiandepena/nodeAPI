const express = require('express');
const morgan = require('morgan');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

dotenv.config()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
.then(()=> console.log("DB Connected!")).catch((err)=>{
    console.log(`DB connection error: ${err.message}`);
    
});

// Routes
const postRoutes = require('./routes/post');

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/', postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => { console.log(`A NodeJS API is listening on port: ${port}`);
 });