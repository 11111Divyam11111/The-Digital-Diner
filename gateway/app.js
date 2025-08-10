
const express = require('express');
const cors = require('cors');
const expressProxy = require('express-http-proxy');

const app = express();


app.use(cors());


app.use(express.json());

// Proxy routes
app.use('/user', expressProxy('http://localhost:3001')); // User Service

app.listen(3003, () => {
    console.log('Gateway is running at port 3003.');
});

