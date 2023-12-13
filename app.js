const express = require('express');
const app = express();
const db = require('./db/connect');

const healthCheck = require('./routes/healthcheck.route');
const user = require('./routes/user.route');
const table = require('./routes/table.route');
const counterVisitWebsite = require('./routes/counterVisitWebsite.route');


require("dotenv").config();
app.use(express.json());

healthCheck(app);
user(app);
table(app);
counterVisitWebsite(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
