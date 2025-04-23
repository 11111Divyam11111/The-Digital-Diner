const express = require('express');
const app = express();
const menuRoutes = require('./routes/menu.routes');
const dotenv = require('dotenv');
dotenv.config();
const connectMongo = require('./db/db');
connectMongo();


app.use(express.json());
app.use('/',menuRoutes);

module.exports = app;