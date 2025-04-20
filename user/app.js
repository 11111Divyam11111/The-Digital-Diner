const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.routes');

dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());

// Use user routes
app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`User service is running at ${port}.`);
});
