const express = require('express');
const mongoose = require('mongoose');
const db = require('./db/connect'); // Adjust the path accordingly
const app = express();
const port = process.env.PORT || 3000;

const healthCheck = require('./routes/healthcheck.route');
const user = require('./routes/user.route');

require("dotenv").config();
app.use(express.json());

healthCheck(app);
user(app)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})