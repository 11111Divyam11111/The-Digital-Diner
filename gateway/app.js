const express = require('express');
const app = express();
const expressProxy = require('express-http-proxy')


app.use('/menu' , expressProxy('http://localhost:3002')); // Menu Service

app.listen(3000 , (req,res) => {
    console.log('Gateway is running at port 3000.');
});